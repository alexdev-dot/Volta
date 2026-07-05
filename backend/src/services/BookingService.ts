import { Booking, BookingFilters, ApiResponse, PaginatedResponse } from '../types';
import { storage } from '../storage/Storage';
import { generateId } from '../utils/helpers';

/**
 * Booking Service
 * Handles booking creation, updates, cancellation, and retrieval
 */
export class BookingService {
  private static instance: BookingService;

  private constructor() {}

  static getInstance(): BookingService {
    if (!BookingService.instance) {
      BookingService.instance = new BookingService();
    }
    return BookingService.instance;
  }

  /**
   * Create a new booking
   */
  async createBooking(data: {
    customerId: string;
    professionalId: string;
    service: string;
    description: string;
    scheduledDate: string;
    scheduledTime: string;
    duration: number;
    price: number;
    location: string;
    notes?: string;
  }): Promise<ApiResponse<Booking>> {
    try {
      // Validate required fields
      if (!data.customerId || !data.professionalId || !data.service || !data.scheduledDate || !data.scheduledTime) {
        return {
          success: false,
          error: 'Missing required fields'
        };
      }

      // Validate date is in the future
      const scheduledDate = new Date(data.scheduledDate);
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      if (scheduledDate < now) {
        return {
          success: false,
          error: 'Scheduled date must be in the future'
        };
      }

      // Validate price
      if (data.price <= 0) {
        return {
          success: false,
          error: 'Price must be greater than 0'
        };
      }

      // Validate duration
      if (data.duration <= 0 || data.duration > 24) {
        return {
          success: false,
          error: 'Duration must be between 1 and 24 hours'
        };
      }

      const newBooking: Booking = {
        id: generateId(),
        customerId: data.customerId,
        professionalId: data.professionalId,
        service: data.service,
        description: data.description,
        scheduledDate: data.scheduledDate,
        scheduledTime: data.scheduledTime,
        duration: data.duration,
        price: data.price,
        status: 'pending',
        location: data.location,
        notes: data.notes,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      storage.addBooking(newBooking);

      return {
        success: true,
        data: newBooking,
        message: 'Booking created successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to create booking'
      };
    }
  }

  /**
   * Get booking by ID
   */
  getBookingById(id: string): Booking | null {
    return storage.getBookingById(id) || null;
  }

  /**
   * Get bookings with filters
   */
  getBookings(filters?: BookingFilters, page: number = 1, pageSize: number = 20): PaginatedResponse<Booking> {
    let bookings = storage.getBookings();

    // Apply filters
    if (filters) {
      if (filters.customerId) {
        bookings = bookings.filter(b => b.customerId === filters.customerId);
      }
      if (filters.professionalId) {
        bookings = bookings.filter(b => b.professionalId === filters.professionalId);
      }
      if (filters.status) {
        bookings = bookings.filter(b => b.status === filters.status);
      }
      if (filters.startDate) {
        bookings = bookings.filter(b => b.scheduledDate >= filters.startDate!);
      }
      if (filters.endDate) {
        bookings = bookings.filter(b => b.scheduledDate <= filters.endDate!);
      }
    }

    // Sort by creation date (newest first)
    bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Pagination
    const total = bookings.length;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = bookings.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      total,
      page,
      pageSize,
      hasMore: endIndex < total
    };
  }

  /**
   * Get bookings for a customer
   */
  getCustomerBookings(customerId: string): Booking[] {
    const bookings = storage.getBookings();
    return bookings
      .filter(b => b.customerId === customerId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  /**
   * Get bookings for a professional
   */
  getProfessionalBookings(professionalId: string): Booking[] {
    const bookings = storage.getBookings();
    return bookings
      .filter(b => b.professionalId === professionalId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  /**
   * Update booking status
   */
  async updateBookingStatus(
    bookingId: string,
    status: Booking['status'],
    userId: string
  ): Promise<ApiResponse<Booking>> {
    try {
      const booking = storage.getBookingById(bookingId);
      if (!booking) {
        return {
          success: false,
          error: 'Booking not found'
        };
      }

      // Validate status transition
      const validTransitions: Record<Booking['status'], Booking['status'][]> = {
        pending: ['confirmed', 'cancelled'],
        confirmed: ['in_progress', 'cancelled'],
        in_progress: ['completed', 'cancelled'],
        completed: [],
        cancelled: []
      };

      if (!validTransitions[booking.status].includes(status)) {
        return {
          success: false,
          error: `Cannot transition from ${booking.status} to ${status}`
        };
      }

      // Update booking
      const updatedBooking = storage.updateBooking(bookingId, { status });

      return {
        success: true,
        data: updatedBooking!,
        message: `Booking ${status} successfully`
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update booking status'
      };
    }
  }

  /**
   * Update booking details
   */
  async updateBooking(
    bookingId: string,
    updates: Partial<Pick<Booking, 'scheduledDate' | 'scheduledTime' | 'duration' | 'price' | 'location' | 'notes' | 'description'>>
  ): Promise<ApiResponse<Booking>> {
    try {
      const booking = storage.getBookingById(bookingId);
      if (!booking) {
        return {
          success: false,
          error: 'Booking not found'
        };
      }

      // Cannot update if booking is in progress or completed
      if (booking.status === 'in_progress' || booking.status === 'completed') {
        return {
          success: false,
          error: 'Cannot update booking in progress or completed'
        };
      }

      // Validate date if provided
      if (updates.scheduledDate) {
        const scheduledDate = new Date(updates.scheduledDate);
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        if (scheduledDate < now) {
          return {
            success: false,
            error: 'Scheduled date must be in the future'
          };
        }
      }

      // Validate price if provided
      if (updates.price !== undefined && updates.price <= 0) {
        return {
          success: false,
          error: 'Price must be greater than 0'
        };
      }

      // Validate duration if provided
      if (updates.duration !== undefined && (updates.duration <= 0 || updates.duration > 24)) {
        return {
          success: false,
          error: 'Duration must be between 1 and 24 hours'
        };
      }

      const updatedBooking = storage.updateBooking(bookingId, updates);

      return {
        success: true,
        data: updatedBooking!,
        message: 'Booking updated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update booking'
      };
    }
  }

  /**
   * Cancel booking
   */
  async cancelBooking(bookingId: string, userId: string): Promise<ApiResponse<Booking>> {
    try {
      const booking = storage.getBookingById(bookingId);
      if (!booking) {
        return {
          success: false,
          error: 'Booking not found'
        };
      }

      // Check if user is authorized to cancel
      if (booking.customerId !== userId && booking.professionalId !== userId) {
        return {
          success: false,
          error: 'Not authorized to cancel this booking'
        };
      }

      // Cannot cancel if booking is in progress or completed
      if (booking.status === 'in_progress' || booking.status === 'completed') {
        return {
          success: false,
          error: 'Cannot cancel booking in progress or completed'
        };
      }

      const updatedBooking = storage.updateBooking(bookingId, { status: 'cancelled' });

      return {
        success: true,
        data: updatedBooking!,
        message: 'Booking cancelled successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to cancel booking'
      };
    }
  }

  /**
   * Get booking statistics for a customer
   */
  getCustomerBookingStats(customerId: string): {
    total: number;
    pending: number;
    confirmed: number;
    inProgress: number;
    completed: number;
    cancelled: number;
  } {
    const bookings = this.getCustomerBookings(customerId);
    return {
      total: bookings.length,
      pending: bookings.filter(b => b.status === 'pending').length,
      confirmed: bookings.filter(b => b.status === 'confirmed').length,
      inProgress: bookings.filter(b => b.status === 'in_progress').length,
      completed: bookings.filter(b => b.status === 'completed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length
    };
  }

  /**
   * Get booking statistics for a professional
   */
  getProfessionalBookingStats(professionalId: string): {
    total: number;
    pending: number;
    confirmed: number;
    inProgress: number;
    completed: number;
    cancelled: number;
    totalEarnings: number;
  } {
    const bookings = this.getProfessionalBookings(professionalId);
    const completedBookings = bookings.filter(b => b.status === 'completed');
    const totalEarnings = completedBookings.reduce((sum, b) => sum + b.price, 0);

    return {
      total: bookings.length,
      pending: bookings.filter(b => b.status === 'pending').length,
      confirmed: bookings.filter(b => b.status === 'confirmed').length,
      inProgress: bookings.filter(b => b.status === 'in_progress').length,
      completed: bookings.filter(b => b.status === 'completed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length,
      totalEarnings
    };
  }

  /**
   * Get upcoming bookings for a customer
   */
  getUpcomingBookings(customerId: string): Booking[] {
    const bookings = this.getCustomerBookings(customerId);
    const now = new Date();
    return bookings.filter(b => {
      const scheduledDate = new Date(b.scheduledDate);
      return scheduledDate >= now && b.status !== 'cancelled' && b.status !== 'completed';
    });
  }

  /**
   * Get upcoming bookings for a professional
   */
  getUpcomingProfessionalBookings(professionalId: string): Booking[] {
    const bookings = this.getProfessionalBookings(professionalId);
    const now = new Date();
    return bookings.filter(b => {
      const scheduledDate = new Date(b.scheduledDate);
      return scheduledDate >= now && b.status !== 'cancelled' && b.status !== 'completed';
    });
  }
}

export const bookingService = BookingService.getInstance();
