import { supabase } from '../database/supabase';

export interface UpdateProfileInput {
  firstName?: string;
  lastName?: string;
  phone?: string;
  location?: string;
  avatar?: string;
}

export interface UserWithProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  location?: string;
  avatar?: string;
  role: string;
  isVerified: boolean;
  isOnline: boolean;
  createdAt: Date;
  professionalProfile?: {
    id: string;
    title: string;
    bio?: string;
    skills: string[];
    experience?: number;
    rating: number;
    reviewCount: number;
    completedJobs: number;
    hourlyRate?: number;
    availability?: string;
    isVerified: boolean;
    backgroundCheck: boolean;
    location?: string;
    serviceArea?: string;
  };
}

class UserService {
  async getProfile(userId: string): Promise<UserWithProfile> {
    const { data: user, error } = await supabase
      .from('users')
      .select(`
        id, email, firstName, lastName, phone, location, avatar, role, isVerified, isOnline, createdAt,
        professional_profiles (*)
      `)
      .eq('id', userId)
      .single();

    if (error || !user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone || undefined,
      location: user.location || undefined,
      avatar: user.avatar || undefined,
      role: user.role,
      isVerified: user.isVerified,
      isOnline: user.isOnline,
      createdAt: user.createdAt,
      professionalProfile: user.professional_profiles?.[0] ? {
        id: user.professional_profiles[0].id,
        title: user.professional_profiles[0].title,
        bio: user.professional_profiles[0].bio || undefined,
        skills: user.professional_profiles[0].skills,
        experience: user.professional_profiles[0].experience || undefined,
        rating: user.professional_profiles[0].rating,
        reviewCount: user.professional_profiles[0].reviewCount,
        completedJobs: user.professional_profiles[0].completedJobs,
        hourlyRate: user.professional_profiles[0].hourlyRate || undefined,
        availability: user.professional_profiles[0].availability || undefined,
        isVerified: user.professional_profiles[0].isVerified,
        backgroundCheck: user.professional_profiles[0].backgroundCheck,
        location: user.professional_profiles[0].location || undefined,
        serviceArea: user.professional_profiles[0].serviceArea || undefined,
      } : undefined,
    };
  }

  async updateProfile(userId: string, input: UpdateProfileInput): Promise<UserWithProfile> {
    const { firstName, lastName, phone, location, avatar } = input;

    const { data: user, error } = await supabase
      .from('users')
      .update({
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(phone !== undefined && { phone }),
        ...(location !== undefined && { location }),
        ...(avatar !== undefined && { avatar }),
      })
      .select(`
        id, email, firstName, lastName, phone, location, avatar, role, isVerified, isOnline, createdAt,
        professional_profiles (*)
      `)
      .eq('id', userId)
      .single();

    if (error || !user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone || undefined,
      location: user.location || undefined,
      avatar: user.avatar || undefined,
      role: user.role,
      isVerified: user.isVerified,
      isOnline: user.isOnline,
      createdAt: user.createdAt,
      professionalProfile: user.professional_profiles?.[0] ? {
        id: user.professional_profiles[0].id,
        title: user.professional_profiles[0].title,
        bio: user.professional_profiles[0].bio || undefined,
        skills: user.professional_profiles[0].skills,
        experience: user.professional_profiles[0].experience || undefined,
        rating: user.professional_profiles[0].rating,
        reviewCount: user.professional_profiles[0].reviewCount,
        completedJobs: user.professional_profiles[0].completedJobs,
        hourlyRate: user.professional_profiles[0].hourlyRate || undefined,
        availability: user.professional_profiles[0].availability || undefined,
        isVerified: user.professional_profiles[0].isVerified,
        backgroundCheck: user.professional_profiles[0].backgroundCheck,
        location: user.professional_profiles[0].location || undefined,
        serviceArea: user.professional_profiles[0].serviceArea || undefined,
      } : undefined,
    };
  }

  async deleteAccount(userId: string): Promise<void> {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', userId);

    if (error) {
      throw new Error('Failed to delete account');
    }
  }

  async getAllUsers(filters?: {
    role?: string;
    isVerified?: boolean;
    isOnline?: boolean;
  }): Promise<UserWithProfile[]> {
    let query = supabase
      .from('users')
      .select(`
        id, email, firstName, lastName, phone, location, avatar, role, isVerified, isOnline, createdAt,
        professional_profiles (*)
      `);

    if (filters?.role) {
      query = query.eq('role', filters.role);
    }
    if (filters?.isVerified !== undefined) {
      query = query.eq('isVerified', filters.isVerified);
    }
    if (filters?.isOnline !== undefined) {
      query = query.eq('isOnline', filters.isOnline);
    }

    const { data: users, error } = await query.order('createdAt', { ascending: false });

    if (error || !users) {
      return [];
    }

    return users.map((user: any) => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone || undefined,
      location: user.location || undefined,
      avatar: user.avatar || undefined,
      role: user.role,
      isVerified: user.isVerified,
      isOnline: user.isOnline,
      createdAt: user.createdAt,
      professionalProfile: user.professional_profiles?.[0] ? {
        id: user.professional_profiles[0].id,
        title: user.professional_profiles[0].title,
        bio: user.professional_profiles[0].bio || undefined,
        skills: user.professional_profiles[0].skills,
        experience: user.professional_profiles[0].experience || undefined,
        rating: user.professional_profiles[0].rating,
        reviewCount: user.professional_profiles[0].reviewCount,
        completedJobs: user.professional_profiles[0].completedJobs,
        hourlyRate: user.professional_profiles[0].hourlyRate || undefined,
        availability: user.professional_profiles[0].availability || undefined,
        isVerified: user.professional_profiles[0].isVerified,
        backgroundCheck: user.professional_profiles[0].backgroundCheck,
        location: user.professional_profiles[0].location || undefined,
        serviceArea: user.professional_profiles[0].serviceArea || undefined,
      } : undefined,
    }));
  }

  async searchUsers(query: string, role?: string): Promise<UserWithProfile[]> {
    let queryBuilder = supabase
      .from('users')
      .select(`
        id, email, firstName, lastName, phone, location, avatar, role, isVerified, isOnline, createdAt,
        professional_profiles (*)
      `)
      .or(`firstName.ilike.%${query}%,lastName.ilike.%${query}%,email.ilike.%${query}%`);

    if (role) {
      queryBuilder = queryBuilder.eq('role', role);
    }

    const { data: users, error } = await queryBuilder;

    if (error || !users) {
      return [];
    }

    return users.map((user: any) => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone || undefined,
      location: user.location || undefined,
      avatar: user.avatar || undefined,
      role: user.role,
      isVerified: user.isVerified,
      isOnline: user.isOnline,
      createdAt: user.createdAt,
      professionalProfile: user.professional_profiles?.[0] ? {
        id: user.professional_profiles[0].id,
        title: user.professional_profiles[0].title,
        bio: user.professional_profiles[0].bio || undefined,
        skills: user.professional_profiles[0].skills,
        experience: user.professional_profiles[0].experience || undefined,
        rating: user.professional_profiles[0].rating,
        reviewCount: user.professional_profiles[0].reviewCount,
        completedJobs: user.professional_profiles[0].completedJobs,
        hourlyRate: user.professional_profiles[0].hourlyRate || undefined,
        availability: user.professional_profiles[0].availability || undefined,
        isVerified: user.professional_profiles[0].isVerified,
        backgroundCheck: user.professional_profiles[0].backgroundCheck,
        location: user.professional_profiles[0].location || undefined,
        serviceArea: user.professional_profiles[0].serviceArea || undefined,
      } : undefined,
    }));
  }
}

export const userService = new UserService();
