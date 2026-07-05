/**
 * VOLTA Backend Logic
 * Main entry point for backend services
 */

// Export types
export * from './types';

// Export storage
export { storage, Storage } from './storage/Storage';

// Export utilities
export * from './utils/helpers';

// Export services
export { authService, AuthService } from './services/AuthService';
export { userService, UserService } from './services/UserService';
export { bookingService, BookingService } from './services/BookingService';
export { professionalService, ProfessionalService } from './services/ProfessionalService';
export { chatService, ChatService } from './services/ChatService';
export { paymentService, PaymentService } from './services/PaymentService';
export { searchService, SearchService } from './services/SearchService';
export { notificationService, NotificationService } from './services/NotificationService';

// Export middleware
export { AuthMiddleware } from './middleware/AuthMiddleware';

// Import services for internal use
import { authService } from './services/AuthService';
import { userService } from './services/UserService';
import { bookingService } from './services/BookingService';
import { professionalService } from './services/ProfessionalService';
import { chatService } from './services/ChatService';
import { paymentService } from './services/PaymentService';
import { searchService } from './services/SearchService';
import { notificationService } from './services/NotificationService';

/**
 * Initialize backend services
 * This function can be called to ensure all services are properly initialized
 */
export function initializeBackend(): void {
  // Services are singleton instances, so they're already initialized
  // This function can be used for any future initialization logic
  console.log('VOLTA Backend initialized');
}

/**
 * Get all service instances
 * Useful for dependency injection or testing
 */
export function getServices() {
  return {
    auth: authService,
    user: userService,
    booking: bookingService,
    professional: professionalService,
    chat: chatService,
    payment: paymentService,
    search: searchService,
    notification: notificationService
  };
}
