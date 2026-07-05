import { User, ApiResponse } from '../types';
import { storage } from '../storage/Storage';
import { generateId, isValidEmail, isValidPhone, formatPhone } from '../utils/helpers';

/**
 * User Service
 * Handles user CRUD operations
 */
export class UserService {
  private static instance: UserService;

  private constructor() {}

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  /**
   * Get user by ID
   */
  getUserById(id: string): User | null {
    return storage.getUserById(id) || null;
  }

  /**
   * Get user by email
   */
  getUserByEmail(email: string): User | null {
    return storage.getUserByEmail(email) || null;
  }

  /**
   * Get all users (admin function)
   */
  getAllUsers(): User[] {
    return storage.getUsers();
  }

  /**
   * Get users by role
   */
  getUsersByRole(role: 'customer' | 'professional'): User[] {
    const users = storage.getUsers();
    return users.filter(u => u.role === role);
  }

  /**
   * Update user profile
   */
  async updateUser(userId: string, updates: {
    fullName?: string;
    phone?: string;
    location?: string;
    avatar?: string;
  }): Promise<ApiResponse<User>> {
    try {
      const user = storage.getUserById(userId);
      if (!user) {
        return {
          success: false,
          error: 'User not found'
        };
      }

      // Validate phone if provided
      if (updates.phone && !isValidPhone(updates.phone)) {
        return {
          success: false,
          error: 'Invalid phone number'
        };
      }

      // Prepare update data
      const updateData: Partial<User> = {};
      
      if (updates.fullName) {
        const nameParts = updates.fullName.trim().split(' ');
        updateData.fullName = updates.fullName.trim();
        updateData.firstName = nameParts[0] || '';
        updateData.lastName = nameParts.slice(1).join(' ') || '';
      }
      
      if (updates.phone) {
        updateData.phone = formatPhone(updates.phone);
      }
      
      if (updates.location) {
        updateData.location = updates.location;
      }
      
      if (updates.avatar) {
        updateData.avatar = updates.avatar;
      }

      const updatedUser = storage.updateUser(userId, updateData);
      
      // Update current user if it's the same user
      const currentUser = storage.getCurrentUser();
      if (currentUser && currentUser.id === userId && updatedUser) {
        storage.setCurrentUser(updatedUser);
      }

      return {
        success: true,
        data: updatedUser!,
        message: 'Profile updated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update profile'
      };
    }
  }

  /**
   * Delete user account
   */
  async deleteUser(userId: string): Promise<ApiResponse<void>> {
    try {
      const success = storage.deleteUser(userId);
      if (!success) {
        return {
          success: false,
          error: 'User not found'
        };
      }

      // Clear session if it's the current user
      const currentUser = storage.getCurrentUser();
      if (currentUser && currentUser.id === userId) {
        storage.clearSession();
        storage.clearCurrentUser();
      }

      return {
        success: true,
        message: 'Account deleted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to delete account'
      };
    }
  }

  /**
   * Search users by name or email
   */
  searchUsers(query: string): User[] {
    const users = storage.getUsers();
    const lowerQuery = query.toLowerCase();
    return users.filter(u => 
      u.fullName.toLowerCase().includes(lowerQuery) ||
      u.email.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Get users by location
   */
  getUsersByLocation(location: string): User[] {
    const users = storage.getUsers();
    return users.filter(u => 
      u.location.toLowerCase().includes(location.toLowerCase())
    );
  }
}

export const userService = UserService.getInstance();
