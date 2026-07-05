import { Notification, ApiResponse } from '../types';
import { storage } from '../storage/Storage';
import { generateId } from '../utils/helpers';

/**
 * Notification Service
 * Handles notification creation and management
 */
export class NotificationService {
  private static instance: NotificationService;

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  /**
   * Create a notification
   */
  async createNotification(data: {
    userId: string;
    type: 'booking' | 'message' | 'payment' | 'review' | 'system';
    title: string;
    message: string;
    data?: Record<string, any>;
  }): Promise<ApiResponse<Notification>> {
    try {
      const notification: Notification = {
        id: generateId(),
        userId: data.userId,
        type: data.type,
        title: data.title,
        message: data.message,
        data: data.data,
        read: false,
        createdAt: new Date().toISOString()
      };

      storage.addNotification(notification);

      return {
        success: true,
        data: notification,
        message: 'Notification created successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to create notification'
      };
    }
  }

  /**
   * Get notifications for a user
   */
  getUserNotifications(userId: string, unreadOnly: boolean = false): Notification[] {
    const notifications = storage.getNotificationsByUserId(userId);
    return unreadOnly ? notifications.filter(n => !n.read) : notifications;
  }

  /**
   * Get notification by ID
   */
  getNotificationById(id: string): Notification | null {
    const notifications = storage.getNotifications();
    return notifications.find(n => n.id === id) || null;
  }

  /**
   * Mark notification as read
   */
  async markAsRead(notificationId: string, userId: string): Promise<ApiResponse<Notification>> {
    try {
      const notification = storage.getNotificationById(notificationId);
      if (!notification) {
        return {
          success: false,
          error: 'Notification not found'
        };
      }

      if (notification.userId !== userId) {
        return {
          success: false,
          error: 'Not authorized to mark this notification'
        };
      }

      const updated = storage.markNotificationAsRead(notificationId);

      return {
        success: true,
        data: updated!,
        message: 'Notification marked as read'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to mark notification as read'
      };
    }
  }

  /**
   * Mark all notifications as read for a user
   */
  async markAllAsRead(userId: string): Promise<ApiResponse<void>> {
    try {
      storage.markAllNotificationsAsRead(userId);

      return {
        success: true,
        message: 'All notifications marked as read'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to mark notifications as read'
      };
    }
  }

  /**
   * Delete notification
   */
  async deleteNotification(notificationId: string, userId: string): Promise<ApiResponse<void>> {
    try {
      const notification = storage.getNotificationById(notificationId);
      if (!notification) {
        return {
          success: false,
          error: 'Notification not found'
        };
      }

      if (notification.userId !== userId) {
        return {
          success: false,
          error: 'Not authorized to delete this notification'
        };
      }

      const notifications = storage.getNotifications();
      const filtered = notifications.filter(n => n.id !== notificationId);
      storage.setNotifications(filtered);

      return {
        success: true,
        message: 'Notification deleted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to delete notification'
      };
    }
  }

  /**
   * Get unread count for a user
   */
  getUnreadCount(userId: string): number {
    const notifications = storage.getNotificationsByUserId(userId);
    return notifications.filter(n => !n.read).length;
  }

  /**
   * Create booking notification
   */
  async createBookingNotification(
    userId: string,
    bookingId: string,
    type: 'created' | 'confirmed' | 'cancelled' | 'completed' | 'in_progress'
  ): Promise<ApiResponse<Notification>> {
    const messages = {
      created: 'New booking request received',
      confirmed: 'Booking has been confirmed',
      cancelled: 'Booking has been cancelled',
      completed: 'Booking has been completed',
      in_progress: 'Booking is now in progress'
    };

    return this.createNotification({
      userId,
      type: 'booking',
      title: 'Booking Update',
      message: messages[type],
      data: { bookingId, type }
    });
  }

  /**
   * Create message notification
   */
  async createMessageNotification(
    userId: string,
    senderId: string,
    senderName: string,
    conversationId?: string
  ): Promise<ApiResponse<Notification>> {
    return this.createNotification({
      userId,
      type: 'message',
      title: 'New Message',
      message: `You have a new message from ${senderName}`,
      data: { senderId, conversationId }
    });
  }

  /**
   * Create payment notification
   */
  async createPaymentNotification(
    userId: string,
    paymentId: string,
    type: 'received' | 'processed' | 'failed' | 'refunded'
  ): Promise<ApiResponse<Notification>> {
    const messages = {
      received: 'Payment received',
      processed: 'Payment processed successfully',
      failed: 'Payment failed',
      refunded: 'Payment refunded'
    };

    return this.createNotification({
      userId,
      type: 'payment',
      title: 'Payment Update',
      message: messages[type],
      data: { paymentId, type }
    });
  }

  /**
   * Create review notification
   */
  async createReviewNotification(
    userId: string,
    reviewerName: string,
    rating: number,
    bookingId: string
  ): Promise<ApiResponse<Notification>> {
    return this.createNotification({
      userId,
      type: 'review',
      title: 'New Review',
      message: `${reviewerName} gave you a ${rating}-star rating`,
      data: { rating, bookingId }
    });
  }

  /**
   * Create system notification
   */
  async createSystemNotification(
    userId: string,
    title: string,
    message: string
  ): Promise<ApiResponse<Notification>> {
    return this.createNotification({
      userId,
      type: 'system',
      title,
      message
    });
  }

  /**
   * Clear old notifications (older than 30 days)
   */
  async clearOldNotifications(userId: string): Promise<ApiResponse<void>> {
    try {
      const notifications = storage.getNotificationsByUserId(userId);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const filtered = notifications.filter(n => new Date(n.createdAt) > thirtyDaysAgo);
      
      // Update storage with filtered notifications
      const allNotifications = storage.getNotifications();
      const otherNotifications = allNotifications.filter(n => n.userId !== userId);
      storage.setNotifications([...otherNotifications, ...filtered]);

      return {
        success: true,
        message: 'Old notifications cleared'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to clear old notifications'
      };
    }
  }

  /**
   * Get notification statistics for a user
   */
  getNotificationStats(userId: string): {
    total: number;
    unread: number;
    byType: Record<string, number>;
  } {
    const notifications = storage.getNotificationsByUserId(userId);
    const byType: Record<string, number> = {};

    notifications.forEach(n => {
      byType[n.type] = (byType[n.type] || 0) + 1;
    });

    return {
      total: notifications.length,
      unread: notifications.filter(n => !n.read).length,
      byType
    };
  }
}

export const notificationService = NotificationService.getInstance();
