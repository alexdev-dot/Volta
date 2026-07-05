import { Message, Conversation, ApiResponse } from '../types';
import { storage } from '../storage/Storage';
import { generateId } from '../utils/helpers';

/**
 * Chat Service
 * Handles messaging and conversations
 */
export class ChatService {
  private static instance: ChatService;

  private constructor() {}

  static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  /**
   * Send a message
   */
  async sendMessage(data: {
    senderId: string;
    receiverId: string;
    content: string;
    bookingId?: string;
  }): Promise<ApiResponse<Message>> {
    try {
      // Validate content
      if (!data.content || data.content.trim().length === 0) {
        return {
          success: false,
          error: 'Message content cannot be empty'
        };
      }

      if (data.content.length > 1000) {
        return {
          success: false,
          error: 'Message content too long (max 1000 characters)'
        };
      }

      // Get or create conversation
      let conversation = storage.getConversationByParticipants(data.senderId, data.receiverId);
      
      if (!conversation) {
        conversation = {
          id: generateId(),
          participant1Id: data.senderId,
          participant2Id: data.receiverId,
          lastMessage: data.content,
          lastMessageTime: new Date().toISOString(),
          unreadCount: 0,
          bookingId: data.bookingId
        };
        storage.addConversation(conversation);
      } else {
        // Update conversation
        storage.updateConversation(conversation.id, {
          lastMessage: data.content,
          lastMessageTime: new Date().toISOString(),
          unreadCount: conversation.participant2Id === data.receiverId ? conversation.unreadCount + 1 : conversation.unreadCount
        });
      }

      // Create message
      const message: Message = {
        id: generateId(),
        bookingId: data.bookingId,
        senderId: data.senderId,
        receiverId: data.receiverId,
        content: data.content.trim(),
        timestamp: new Date().toISOString(),
        read: false
      };

      storage.addMessage(message);

      return {
        success: true,
        data: message,
        message: 'Message sent successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to send message'
      };
    }
  }

  /**
   * Get messages between two users
   */
  getMessages(participant1Id: string, participant2Id: string): Message[] {
    return storage.getMessagesByConversation(participant1Id, participant2Id);
  }

  /**
   * Get messages for a booking
   */
  getBookingMessages(bookingId: string): Message[] {
    const messages = storage.getMessages();
    return messages
      .filter(m => m.bookingId === bookingId)
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  }

  /**
   * Mark messages as read
   */
  async markMessagesAsRead(senderId: string, receiverId: string): Promise<ApiResponse<void>> {
    try {
      storage.markMessagesAsRead(senderId, receiverId);
      
      // Update conversation unread count
      const conversation = storage.getConversationByParticipants(senderId, receiverId);
      if (conversation) {
        storage.updateConversation(conversation.id, { unreadCount: 0 });
      }

      return {
        success: true,
        message: 'Messages marked as read'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to mark messages as read'
      };
    }
  }

  /**
   * Get user's conversations
   */
  getUserConversations(userId: string): Conversation[] {
    const conversations = storage.getConversations();
    return conversations
      .filter(c => c.participant1Id === userId || c.participant2Id === userId)
      .sort((a, b) => new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime());
  }

  /**
   * Get conversation by ID
   */
  getConversationById(conversationId: string): Conversation | null {
    const conversations = storage.getConversations();
    return conversations.find(c => c.id === conversationId) || null;
  }

  /**
   * Delete conversation
   */
  async deleteConversation(conversationId: string, userId: string): Promise<ApiResponse<void>> {
    try {
      const conversation = storage.getConversationById(conversationId);
      if (!conversation) {
        return {
          success: false,
          error: 'Conversation not found'
        };
      }

      // Check if user is part of the conversation
      if (conversation.participant1Id !== userId && conversation.participant2Id !== userId) {
        return {
          success: false,
          error: 'Not authorized to delete this conversation'
        };
      }

      // Delete all messages in the conversation
      const messages = storage.getMessages();
      const filteredMessages = messages.filter(m => 
        !((m.senderId === conversation.participant1Id && m.receiverId === conversation.participant2Id) ||
          (m.senderId === conversation.participant2Id && m.receiverId === conversation.participant1Id))
      );
      storage.setMessages(filteredMessages);

      // Delete conversation
      const conversations = storage.getConversations();
      const filteredConversations = conversations.filter(c => c.id !== conversationId);
      storage.setConversations(filteredConversations);

      return {
        success: true,
        message: 'Conversation deleted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to delete conversation'
      };
    }
  }

  /**
   * Get unread message count for user
   */
  getUnreadCount(userId: string): number {
    const conversations = storage.getConversations();
    let totalUnread = 0;
    
    for (const conversation of conversations) {
      if (conversation.participant2Id === userId) {
        totalUnread += conversation.unreadCount;
      }
    }
    
    return totalUnread;
  }

  /**
   * Get last message between two users
   */
  getLastMessage(participant1Id: string, participant2Id: string): Message | null {
    const messages = this.getMessages(participant1Id, participant2Id);
    return messages.length > 0 ? messages[messages.length - 1] : null;
  }

  /**
   * Block user (simulated - in real app, this would be more complex)
   */
  async blockUser(blockerId: string, blockedId: string): Promise<ApiResponse<void>> {
    try {
      // In a real application, this would add to a blocked users list
      // For now, we'll just return success
      return {
        success: true,
        message: 'User blocked successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to block user'
      };
    }
  }

  /**
   * Unblock user
   */
  async unblockUser(blockerId: string, blockedId: string): Promise<ApiResponse<void>> {
    try {
      // In a real application, this would remove from blocked users list
      // For now, we'll just return success
      return {
        success: true,
        message: 'User unblocked successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to unblock user'
      };
    }
  }
}

export const chatService = ChatService.getInstance();
