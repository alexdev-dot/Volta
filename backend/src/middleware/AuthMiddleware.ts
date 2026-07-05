import { Session, ApiResponse } from '../types';
import { storage } from '../storage/Storage';

/**
 * Authentication Middleware
 * Validates user sessions and permissions
 */
export class AuthMiddleware {
  /**
   * Check if user is authenticated
   */
  static isAuthenticated(): ApiResponse<Session> {
    const session = storage.getSession();
    
    if (!session) {
      return {
        success: false,
        error: 'No active session'
      };
    }

    // Check if session is expired
    const now = new Date();
    const expiresAt = new Date(session.expiresAt);
    if (now > expiresAt) {
      storage.clearSession();
      storage.clearCurrentUser();
      return {
        success: false,
        error: 'Session expired'
      };
    }

    if (!session.loggedIn) {
      return {
        success: false,
        error: 'User not logged in'
      };
    }

    return {
      success: true,
      data: session
    };
  }

  /**
   * Check if user has specific role
   */
  static hasRole(requiredRole: 'customer' | 'professional'): ApiResponse<Session> {
    const authResult = this.isAuthenticated();
    
    if (!authResult.success) {
      return authResult;
    }

    if (authResult.data!.role !== requiredRole) {
      return {
        success: false,
        error: `Requires ${requiredRole} role`
      };
    }

    return authResult;
  }

  /**
   * Check if user is the owner of a resource
   */
  static isResourceOwner(resourceUserId: string): ApiResponse<boolean> {
    const authResult = this.isAuthenticated();
    
    if (!authResult.success) {
      return {
        success: false,
        error: authResult.error
      };
    }

    const currentUser = storage.getCurrentUser();
    if (!currentUser) {
      return {
        success: false,
        error: 'User not found'
      };
    }

    if (currentUser.id !== resourceUserId) {
      return {
        success: false,
        error: 'Not authorized to access this resource'
      };
    }

    return {
      success: true,
      data: true
    };
  }

  /**
   * Get current user
   */
  static getCurrentUser() {
    const authResult = this.isAuthenticated();
    
    if (!authResult.success) {
      return null;
    }

    return storage.getCurrentUser();
  }

  /**
   * Require authentication (throws error if not authenticated)
   */
  static requireAuth(): Session {
    const result = this.isAuthenticated();
    
    if (!result.success) {
      throw new Error(result.error);
    }

    return result.data!;
  }

  /**
   * Require specific role (throws error if not authorized)
   */
  static requireRole(role: 'customer' | 'professional'): Session {
    const result = this.hasRole(role);
    
    if (!result.success) {
      throw new Error(result.error);
    }

    return result.data!;
  }
}
