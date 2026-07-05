import { User, Session, ApiResponse } from '../types';
import { storage } from '../storage/Storage';
import { generateId, isValidEmail, isValidPhone } from '../utils/helpers';

/**
 * Authentication Service
 * Handles user registration, login, logout, and session management
 */
export class AuthService {
  private static instance: AuthService;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  /**
   * Register a new user
   */
  async register(data: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    password: string;
    role: 'customer' | 'professional';
  }): Promise<ApiResponse<User>> {
    try {
      // Check if user already exists
      const existingUser = storage.getUserByEmail(data.email);
      if (existingUser) {
        return {
          success: false,
          error: 'An account with this email already exists'
        };
      }

      // Validate password
      if (data.password.length < 8) {
        return {
          success: false,
          error: 'Password must be at least 8 characters'
        };
      }

      // Validate email format
      if (!isValidEmail(data.email)) {
        return {
          success: false,
          error: 'Invalid email format'
        };
      }

      // Validate phone
      if (!isValidPhone(data.phone)) {
        return {
          success: false,
          error: 'Invalid phone number'
        };
      }

      // Create user
      const nameParts = data.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const newUser: User = {
        id: generateId(),
        fullName: data.fullName.trim(),
        firstName,
        lastName,
        email: data.email.trim(),
        phone: data.phone.trim(),
        location: data.location,
        role: data.role,
        password: data.password, // In production, this should be hashed
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      storage.addUser(newUser);

      // Create session
      const session: Session = {
        email: newUser.email,
        loggedIn: true,
        role: newUser.role,
        userId: newUser.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
      };
      storage.setSession(session);
      storage.setCurrentUser(newUser);

      return {
        success: true,
        data: newUser,
        message: 'Account created successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to create account'
      };
    }
  }

  /**
   * Login user
   */
  async login(email: string, password: string): Promise<ApiResponse<User>> {
    try {
      // Find user
      const user = storage.getUserByEmail(email);
      if (!user) {
        return {
          success: false,
          error: 'Invalid email or password'
        };
      }

      // Verify password
      if (user.password !== password) {
        return {
          success: false,
          error: 'Invalid email or password'
        };
      }

      // Create session
      const session: Session = {
        email: user.email,
        loggedIn: true,
        role: user.role,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
      };
      storage.setSession(session);
      storage.setCurrentUser(user);

      return {
        success: true,
        data: user,
        message: 'Login successful'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Login failed'
      };
    }
  }

  /**
   * Logout user
   */
  async logout(): Promise<ApiResponse<void>> {
    try {
      storage.clearSession();
      storage.clearCurrentUser();

      return {
        success: true,
        message: 'Logout successful'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Logout failed'
      };
    }
  }

  /**
   * Get current authenticated user
   */
  getCurrentUser(): User | null {
    return storage.getCurrentUser();
  }

  /**
   * Get current session
   */
  getSession(): Session | null {
    return storage.getSession();
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    const session = storage.getSession();
    if (!session) return false;

    // Check if session is expired
    const now = new Date();
    const expiresAt = new Date(session.expiresAt);
    if (now > expiresAt) {
      storage.clearSession();
      storage.clearCurrentUser();
      return false;
    }

    return session.loggedIn;
  }

  /**
   * Check if user has specific role
   */
  hasRole(role: 'customer' | 'professional'): boolean {
    const session = storage.getSession();
    return session?.role === role;
  }

  /**
   * Refresh session
   */
  async refreshSession(): Promise<ApiResponse<Session>> {
    try {
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

      // Extend session
      const newSession: Session = {
        ...session,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      };
      storage.setSession(newSession);

      return {
        success: true,
        data: newSession,
        message: 'Session refreshed'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to refresh session'
      };
    }
  }

  /**
   * Update user password
   */
  async updatePassword(userId: string, currentPassword: string, newPassword: string): Promise<ApiResponse<void>> {
    try {
      const user = storage.getUserById(userId);
      if (!user) {
        return {
          success: false,
          error: 'User not found'
        };
      }

      // Verify current password
      if (user.password !== currentPassword) {
        return {
          success: false,
          error: 'Current password is incorrect'
        };
      }

      // Validate new password
      if (newPassword.length < 8) {
        return {
          success: false,
          error: 'Password must be at least 8 characters'
        };
      }

      // Update password
      storage.updateUser(userId, { password: newPassword });

      return {
        success: true,
        message: 'Password updated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update password'
      };
    }
  }

  /**
   * Request password reset (simulated)
   */
  async requestPasswordReset(email: string): Promise<ApiResponse<void>> {
    try {
      const user = storage.getUserByEmail(email);
      if (!user) {
        return {
          success: false,
          error: 'User not found'
        };
      }

      // In production, send email with reset link
      // For now, just return success
      return {
        success: true,
        message: 'Password reset link sent to email'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to request password reset'
      };
    }
  }

  /**
   * Reset password with token (simulated)
   */
  async resetPassword(token: string, newPassword: string): Promise<ApiResponse<void>> {
    try {
      // In production, verify token and reset password
      // For now, just return success
      return {
        success: true,
        message: 'Password reset successful'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to reset password'
      };
    }
  }
}

export const authService = AuthService.getInstance();
