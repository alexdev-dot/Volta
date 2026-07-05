import { ProfessionalProfile, User, ApiResponse } from '../types';
import { storage } from '../storage/Storage';
import { generateId, calculateAverageRating } from '../utils/helpers';

/**
 * Professional Service
 * Handles professional profile management
 */
export class ProfessionalService {
  private static instance: ProfessionalService;

  private constructor() {}

  static getInstance(): ProfessionalService {
    if (!ProfessionalService.instance) {
      ProfessionalService.instance = new ProfessionalService();
    }
    return ProfessionalService.instance;
  }

  /**
   * Get professional profile by user ID
   */
  getProfessionalProfile(userId: string): ProfessionalProfile | null {
    return storage.getProfessionalProfileByUserId(userId) || null;
  }

  /**
   * Create or update professional profile
   */
  async createOrUpdateProfile(userId: string, data: {
    skills: string[];
    experience: string;
    hourlyRate: number;
    availability: ProfessionalProfile['availability'];
    bio: string;
    certifications?: ProfessionalProfile['certifications'];
    portfolio?: ProfessionalProfile['portfolio'];
  }): Promise<ApiResponse<ProfessionalProfile>> {
    try {
      const existingProfile = storage.getProfessionalProfileByUserId(userId);
      
      const profileData: ProfessionalProfile = {
        userId,
        skills: data.skills,
        experience: data.experience,
        hourlyRate: data.hourlyRate,
        availability: data.availability,
        bio: data.bio,
        certifications: data.certifications || [],
        portfolio: data.portfolio || [],
        verified: existingProfile?.verified || false,
        rating: existingProfile?.rating || 0,
        reviewCount: existingProfile?.reviewCount || 0,
        completedJobs: existingProfile?.completedJobs || 0
      };

      if (existingProfile) {
        const updated = storage.updateProfessionalProfile(userId, profileData);
        return {
          success: true,
          data: updated!,
          message: 'Profile updated successfully'
        };
      } else {
        storage.addProfessionalProfile(profileData);
        return {
          success: true,
          data: profileData,
          message: 'Profile created successfully'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: 'Failed to save profile'
      };
    }
  }

  /**
   * Update professional rating
   */
  async updateRating(userId: string, newRating: number): Promise<ApiResponse<ProfessionalProfile>> {
    try {
      const profile = storage.getProfessionalProfileByUserId(userId);
      if (!profile) {
        return {
          success: false,
          error: 'Profile not found'
        };
      }

      // Calculate new average rating
      const reviews = storage.getReviewsByProfessionalId(userId);
      const ratings = reviews.map(r => r.rating);
      ratings.push(newRating);
      const averageRating = calculateAverageRating(ratings);

      const updated = storage.updateProfessionalProfile(userId, {
        rating: averageRating,
        reviewCount: reviews.length + 1
      });

      return {
        success: true,
        data: updated!,
        message: 'Rating updated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update rating'
      };
    }
  }

  /**
   * Increment completed jobs count
   */
  async incrementCompletedJobs(userId: string): Promise<ApiResponse<ProfessionalProfile>> {
    try {
      const profile = storage.getProfessionalProfileByUserId(userId);
      if (!profile) {
        return {
          success: false,
          error: 'Profile not found'
        };
      }

      const updated = storage.updateProfessionalProfile(userId, {
        completedJobs: profile.completedJobs + 1
      });

      return {
        success: true,
        data: updated!,
        message: 'Completed jobs count updated'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update completed jobs'
      };
    }
  }

  /**
   * Verify professional
   */
  async verifyProfessional(userId: string): Promise<ApiResponse<ProfessionalProfile>> {
    try {
      const updated = storage.updateProfessionalProfile(userId, { verified: true });
      if (!updated) {
        return {
          success: false,
          error: 'Profile not found'
        };
      }

      return {
        success: true,
        data: updated,
        message: 'Professional verified successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to verify professional'
      };
    }
  }

  /**
   * Get all professional profiles
   */
  getAllProfessionalProfiles(): ProfessionalProfile[] {
    return storage.getProfessionalProfiles();
  }

  /**
   * Get verified professionals
   */
  getVerifiedProfessionals(): ProfessionalProfile[] {
    const profiles = storage.getProfessionalProfiles();
    return profiles.filter(p => p.verified);
  }

  /**
   * Search professionals by skills
   */
  searchProfessionalsBySkills(skills: string[]): ProfessionalProfile[] {
    const profiles = storage.getProfessionalProfiles();
    return profiles.filter(p => 
      skills.some(skill => p.skills.some(s => s.toLowerCase().includes(skill.toLowerCase())))
    );
  }

  /**
   * Get professionals by rating range
   */
  getProfessionalsByRating(minRating: number, maxRating: number): ProfessionalProfile[] {
    const profiles = storage.getProfessionalProfiles();
    return profiles.filter(p => p.rating >= minRating && p.rating <= maxRating);
  }

  /**
   * Get professionals by hourly rate range
   */
  getProfessionalsByRateRange(minRate: number, maxRate: number): ProfessionalProfile[] {
    const profiles = storage.getProfessionalProfiles();
    return profiles.filter(p => p.hourlyRate >= minRate && p.hourlyRate <= maxRate);
  }

  /**
   * Add certification to profile
   */
  async addCertification(userId: string, certification: {
    name: string;
    issuer: string;
    date: string;
    documentUrl?: string;
  }): Promise<ApiResponse<ProfessionalProfile>> {
    try {
      const profile = storage.getProfessionalProfileByUserId(userId);
      if (!profile) {
        return {
          success: false,
          error: 'Profile not found'
        };
      }

      const newCertification = {
        id: generateId(),
        ...certification
      };

      const updated = storage.updateProfessionalProfile(userId, {
        certifications: [...profile.certifications, newCertification]
      });

      return {
        success: true,
        data: updated!,
        message: 'Certification added successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to add certification'
      };
    }
  }

  /**
   * Remove certification from profile
   */
  async removeCertification(userId: string, certificationId: string): Promise<ApiResponse<ProfessionalProfile>> {
    try {
      const profile = storage.getProfessionalProfileByUserId(userId);
      if (!profile) {
        return {
          success: false,
          error: 'Profile not found'
        };
      }

      const updated = storage.updateProfessionalProfile(userId, {
        certifications: profile.certifications.filter(c => c.id !== certificationId)
      });

      return {
        success: true,
        data: updated!,
        message: 'Certification removed successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to remove certification'
      };
    }
  }

  /**
   * Add portfolio item to profile
   */
  async addPortfolioItem(userId: string, item: {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
  }): Promise<ApiResponse<ProfessionalProfile>> {
    try {
      const profile = storage.getProfessionalProfileByUserId(userId);
      if (!profile) {
        return {
          success: false,
          error: 'Profile not found'
        };
      }

      const newItem = {
        id: generateId(),
        ...item
      };

      const updated = storage.updateProfessionalProfile(userId, {
        portfolio: [...profile.portfolio, newItem]
      });

      return {
        success: true,
        data: updated!,
        message: 'Portfolio item added successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to add portfolio item'
      };
    }
  }

  /**
   * Remove portfolio item from profile
   */
  async removePortfolioItem(userId: string, itemId: string): Promise<ApiResponse<ProfessionalProfile>> {
    try {
      const profile = storage.getProfessionalProfileByUserId(userId);
      if (!profile) {
        return {
          success: false,
          error: 'Profile not found'
        };
      }

      const updated = storage.updateProfessionalProfile(userId, {
        portfolio: profile.portfolio.filter(i => i.id !== itemId)
      });

      return {
        success: true,
        data: updated!,
        message: 'Portfolio item removed successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to remove portfolio item'
      };
    }
  }

  /**
   * Update availability
   */
  async updateAvailability(userId: string, availability: ProfessionalProfile['availability']): Promise<ApiResponse<ProfessionalProfile>> {
    try {
      const updated = storage.updateProfessionalProfile(userId, { availability });
      if (!updated) {
        return {
          success: false,
          error: 'Profile not found'
        };
      }

      return {
        success: true,
        data: updated,
        message: 'Availability updated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update availability'
      };
    }
  }

  /**
   * Get professional with user details
   */
  getProfessionalWithUserDetails(userId: string): (User & ProfessionalProfile) | null {
    const user = storage.getUserById(userId);
    const profile = storage.getProfessionalProfileByUserId(userId);
    
    if (!user || !profile) return null;
    
    return { ...user, ...profile };
  }

  /**
   * Get all professionals with user details
   */
  getAllProfessionalsWithDetails(): (User & ProfessionalProfile)[] {
    const profiles = storage.getProfessionalProfiles();
    const professionals: (User & ProfessionalProfile)[] = [];
    
    for (const profile of profiles) {
      const user = storage.getUserById(profile.userId);
      if (user) {
        professionals.push({ ...user, ...profile });
      }
    }
    
    return professionals;
  }
}

export const professionalService = ProfessionalService.getInstance();
