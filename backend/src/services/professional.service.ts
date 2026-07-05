import { supabase } from '../database/supabase';

export interface CreateProfessionalProfileInput {
  userId: string;
  title: string;
  bio?: string;
  skills: string[];
  experience?: number;
  hourlyRate?: number;
  availability?: string;
  location?: string;
  serviceArea?: string;
}

export interface UpdateProfessionalProfileInput {
  title?: string;
  bio?: string;
  skills?: string[];
  experience?: number;
  hourlyRate?: number;
  availability?: string;
  location?: string;
  serviceArea?: string;
}

class ProfessionalService {
  async createProfile(input: CreateProfessionalProfileInput) {
    const { userId, title, bio, skills, experience, hourlyRate, availability, location, serviceArea } = input;

    // Check if user already has a profile
    const { data: existingProfile } = await supabase
      .from('professional_profiles')
      .select('id')
      .eq('userId', userId)
      .single();

    if (existingProfile) {
      throw new Error('Professional profile already exists for this user');
    }

    // Create profile
    const { data: profile, error } = await supabase
      .from('professional_profiles')
      .insert({
        userId,
        title,
        bio,
        skills,
        experience,
        hourlyRate,
        availability,
        location,
        serviceArea,
      })
      .select('*')
      .single();

    if (error || !profile) {
      throw new Error('Failed to create professional profile');
    }

    return profile;
  }

  async getProfile(userId: string) {
    const { data: profile, error } = await supabase
      .from('professional_profiles')
      .select(`
        *,
        users (id, email, firstName, lastName, phone, avatar, isVerified, isOnline)
      `)
      .eq('userId', userId)
      .single();

    if (error || !profile) {
      throw new Error('Professional profile not found');
    }

    return profile;
  }

  async updateProfile(userId: string, input: UpdateProfessionalProfileInput) {
    const { title, bio, skills, experience, hourlyRate, availability, location, serviceArea } = input;

    const { data: profile, error } = await supabase
      .from('professional_profiles')
      .update({
        ...(title && { title }),
        ...(bio !== undefined && { bio }),
        ...(skills && { skills }),
        ...(experience !== undefined && { experience }),
        ...(hourlyRate !== undefined && { hourlyRate }),
        ...(availability !== undefined && { availability }),
        ...(location !== undefined && { location }),
        ...(serviceArea !== undefined && { serviceArea }),
      })
      .select('*')
      .eq('userId', userId)
      .single();

    if (error || !profile) {
      throw new Error('Professional profile not found');
    }

    return profile;
  }

  async deleteProfile(userId: string): Promise<void> {
    const { error } = await supabase
      .from('professional_profiles')
      .delete()
      .eq('userId', userId);

    if (error) {
      throw new Error('Failed to delete professional profile');
    }
  }

  async getAllProfessionals(filters?: {
    isVerified?: boolean;
    backgroundCheck?: boolean;
    minRating?: number;
    location?: string;
  }) {
    let query = supabase
      .from('professional_profiles')
      .select(`
        *,
        users (id, email, firstName, lastName, phone, avatar, isVerified, isOnline)
      `);

    if (filters?.isVerified !== undefined) {
      query = query.eq('isVerified', filters.isVerified);
    }
    if (filters?.backgroundCheck !== undefined) {
      query = query.eq('backgroundCheck', filters.backgroundCheck);
    }
    if (filters?.minRating) {
      query = query.gte('rating', filters.minRating);
    }
    if (filters?.location) {
      query = query.ilike('location', `%${filters.location}%`);
    }

    const { data: profiles, error } = await query.order('rating', { ascending: false });

    if (error || !profiles) {
      return [];
    }

    return profiles;
  }

  async searchProfessionals(query: string, filters?: {
    skills?: string[];
    location?: string;
    minRating?: number;
  }) {
    let queryBuilder = supabase
      .from('professional_profiles')
      .select(`
        *,
        users (id, email, firstName, lastName, phone, avatar, isVerified, isOnline)
      `)
      .or(`title.ilike.%${query}%,bio.ilike.%${query}%,skills.cs.{${query}}`);

    if (filters?.skills && filters.skills.length > 0) {
      queryBuilder = queryBuilder.contains('skills', filters.skills);
    }
    if (filters?.location) {
      queryBuilder = queryBuilder.ilike('location', `%${filters.location}%`);
    }
    if (filters?.minRating) {
      queryBuilder = queryBuilder.gte('rating', filters.minRating);
    }

    const { data: profiles, error } = await queryBuilder.order('rating', { ascending: false });

    if (error || !profiles) {
      return [];
    }

    return profiles;
  }

  async updateRating(userId: string, rating: number): Promise<void> {
    const { data: profile } = await supabase
      .from('professional_profiles')
      .select('rating, reviewCount')
      .eq('userId', userId)
      .single();

    if (!profile) {
      throw new Error('Professional profile not found');
    }

    // Calculate new average rating
    const newRating = ((profile.rating * profile.reviewCount) + rating) / (profile.reviewCount + 1);

    const { error } = await supabase
      .from('professional_profiles')
      .update({
        rating: newRating,
        reviewCount: profile.reviewCount + 1,
      })
      .eq('userId', userId);

    if (error) {
      throw new Error('Failed to update rating');
    }
  }

  async incrementCompletedJobs(userId: string): Promise<void> {
    const { data: profile } = await supabase
      .from('professional_profiles')
      .select('completedJobs')
      .eq('userId', userId)
      .single();

    if (!profile) {
      throw new Error('Professional profile not found');
    }

    const { error } = await supabase
      .from('professional_profiles')
      .update({
        completedJobs: profile.completedJobs + 1,
      })
      .eq('userId', userId);

    if (error) {
      throw new Error('Failed to increment completed jobs');
    }
  }

  async verifyProfessional(userId: string): Promise<void> {
    const { error: profileError } = await supabase
      .from('professional_profiles')
      .update({ isVerified: true })
      .eq('userId', userId);

    if (profileError) {
      throw new Error('Failed to verify professional profile');
    }

    // Also mark user as verified
    const { error: userError } = await supabase
      .from('users')
      .update({ isVerified: true })
      .eq('id', userId);

    if (userError) {
      throw new Error('Failed to verify user');
    }
  }

  async setBackgroundCheck(userId: string, passed: boolean): Promise<void> {
    const { error } = await supabase
      .from('professional_profiles')
      .update({ backgroundCheck: passed })
      .eq('userId', userId);

    if (error) {
      throw new Error('Failed to update background check status');
    }
  }
}

export const professionalService = new ProfessionalService();
