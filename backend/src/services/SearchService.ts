import { SearchFilters, User, ProfessionalProfile, PaginatedResponse } from '../types';
import { storage } from '../storage/Storage';
import { professionalService } from './ProfessionalService';

/**
 * Mock professional data for search
 * In production, this would come from a database
 */
const MOCK_PROFESSIONALS = [
  {
    userId: '1',
    name: 'John Kamau',
    role: 'Plumber',
    rating: 4.8,
    reviews: 128,
    distance: 2.1,
    price: 1200,
    status: 'Online',
    location: 'Ruiru, Kiambu',
    skills: ['plumbing', 'pipe repair', 'installation'],
    avatar: 'https://i.pravatar.cc/400?img=11'
  },
  {
    userId: '2',
    name: 'David Mwangi',
    role: 'Electrician',
    rating: 4.7,
    reviews: 96,
    distance: 2.4,
    price: 1000,
    status: 'Busy',
    location: 'Ruiru, Kiambu',
    skills: ['electrical', 'wiring', 'installation'],
    avatar: 'https://i.pravatar.cc/400?img=12'
  },
  {
    userId: '3',
    name: 'Peter Ndungu',
    role: 'Mechanic',
    rating: 4.6,
    reviews: 74,
    distance: 3.1,
    price: 1500,
    status: 'Online',
    location: 'Thika, Kiambu',
    skills: ['mechanics', 'car repair', 'maintenance'],
    avatar: 'https://i.pravatar.cc/400?img=13'
  },
  {
    userId: '4',
    name: 'Mary Wanjiku',
    role: 'Cleaner',
    rating: 4.9,
    reviews: 53,
    distance: 1.8,
    price: 800,
    status: 'Online',
    location: 'Ruiru, Kiambu',
    skills: ['cleaning', 'house cleaning', 'office cleaning'],
    avatar: 'https://i.pravatar.cc/400?img=5'
  },
  {
    userId: '5',
    name: 'James Gitahi',
    role: 'Carpenter',
    rating: 4.7,
    reviews: 65,
    distance: 3.5,
    price: 1100,
    status: 'Offline',
    location: 'Nairobi, Kenya',
    skills: ['carpentry', 'furniture', 'woodwork'],
    avatar: 'https://i.pravatar.cc/400?img=15'
  },
  {
    userId: '6',
    name: 'Daniel Mutua',
    role: 'Painter',
    rating: 4.8,
    reviews: 49,
    distance: 2.7,
    price: 900,
    status: 'Online',
    location: 'Ruiru, Kiambu',
    skills: ['painting', 'interior painting', 'exterior painting'],
    avatar: 'https://i.pravatar.cc/400?img=16'
  },
  {
    userId: '7',
    name: 'Samuel Kirui',
    role: 'Landscaper',
    rating: 4.6,
    reviews: 38,
    distance: 4.2,
    price: 1300,
    status: 'Online',
    location: 'Nakuru, Kenya',
    skills: ['landscaping', 'gardening', 'lawn care'],
    avatar: 'https://i.pravatar.cc/400?img=17'
  },
  {
    userId: '8',
    name: 'Brian Otieno',
    role: 'HVAC Specialist',
    rating: 4.7,
    reviews: 57,
    distance: 3.0,
    price: 1600,
    status: 'Busy',
    location: 'Mombasa, Kenya',
    skills: ['hvac', 'air conditioning', 'ventilation'],
    avatar: 'https://i.pravatar.cc/400?img=18'
  }
];

interface ProfessionalSearchResult {
  userId: string;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  distance: number;
  price: number;
  status: string;
  location: string;
  skills: string[];
  avatar: string;
}

/**
 * Search Service
 * Handles search and filtering of professionals
 */
export class SearchService {
  private static instance: SearchService;

  private constructor() {}

  static getInstance(): SearchService {
    if (!SearchService.instance) {
      SearchService.instance = new SearchService();
    }
    return SearchService.instance;
  }

  /**
   * Search professionals with filters
   */
  searchProfessionals(filters: SearchFilters, page: number = 1, pageSize: number = 20): PaginatedResponse<ProfessionalSearchResult> {
    let results = [...MOCK_PROFESSIONALS];

    // Apply text search query
    if (filters.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.role.toLowerCase().includes(query) ||
        p.skills.some(s => s.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (filters.category && filters.category !== 'All') {
      const category = filters.category.toLowerCase();
      results = results.filter(p => 
        p.role.toLowerCase().includes(category) ||
        p.skills.some(s => s.toLowerCase().includes(category))
      );
    }

    // Apply location filter
    if (filters.location) {
      const location = filters.location.toLowerCase();
      results = results.filter(p => p.location.toLowerCase().includes(location));
    }

    // Apply minimum rating filter
    if (filters.minRating !== undefined) {
      results = results.filter(p => p.rating >= filters.minRating!);
    }

    // Apply maximum price filter
    if (filters.maxPrice !== undefined) {
      results = results.filter(p => p.price <= filters.maxPrice!);
    }

    // Apply availability filter
    if (filters.availability) {
      switch (filters.availability) {
        case 'available_now':
          results = results.filter(p => p.status === 'Online');
          break;
        case 'today':
          results = results.filter(p => p.status === 'Online' || p.status === 'Busy');
          break;
        case 'this_week':
          // For simulation, include all except offline
          results = results.filter(p => p.status !== 'Offline');
          break;
      }
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'distance':
        results.sort((a, b) => a.distance - b.distance);
        break;
      case 'price_low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        results.sort((a, b) => b.price - a.price);
        break;
      default:
        // Default: sort by rating
        results.sort((a, b) => b.rating - a.rating);
    }

    // Pagination
    const total = results.length;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = results.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      total,
      page,
      pageSize,
      hasMore: endIndex < total
    };
  }

  /**
   * Get professional by ID
   */
  getProfessionalById(userId: string): ProfessionalSearchResult | null {
    return MOCK_PROFESSIONALS.find(p => p.userId === userId) || null;
  }

  /**
   * Get professionals by category
   */
  getProfessionalsByCategory(category: string): ProfessionalSearchResult[] {
    const lowerCategory = category.toLowerCase();
    return MOCK_PROFESSIONALS.filter(p => 
      p.role.toLowerCase().includes(lowerCategory) ||
      p.skills.some(s => s.toLowerCase().includes(lowerCategory))
    );
  }

  /**
   * Get top rated professionals
   */
  getTopRatedProfessionals(limit: number = 10): ProfessionalSearchResult[] {
    return [...MOCK_PROFESSIONALS]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }

  /**
   * Get professionals near a location
   */
  getProfessionalsNearLocation(location: string, radius: number = 10): ProfessionalSearchResult[] {
    const lowerLocation = location.toLowerCase();
    return MOCK_PROFESSIONALS.filter(p => 
      p.location.toLowerCase().includes(lowerLocation) &&
      p.distance <= radius
    ).sort((a, b) => a.distance - b.distance);
  }

  /**
   * Get available categories
   */
  getCategories(): string[] {
    const categories = new Set<string>();
    MOCK_PROFESSIONALS.forEach(p => {
      categories.add(p.role);
      p.skills.forEach(s => categories.add(s));
    });
    return Array.from(categories).sort();
  }

  /**
   * Get locations
   */
  getLocations(): string[] {
    const locations = new Set<string>();
    MOCK_PROFESSIONALS.forEach(p => locations.add(p.location));
    return Array.from(locations).sort();
  }

  /**
   * Get price range
   */
  getPriceRange(): { min: number; max: number } {
    const prices = MOCK_PROFESSIONALS.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }

  /**
   * Get rating range
   */
  getRatingRange(): { min: number; max: number } {
    const ratings = MOCK_PROFESSIONALS.map(p => p.rating);
    return {
      min: Math.min(...ratings),
      max: Math.max(...ratings)
    };
  }

  /**
   * Search suggestions (autocomplete)
   */
  getSearchSuggestions(query: string, limit: number = 5): string[] {
    const lowerQuery = query.toLowerCase();
    const suggestions = new Set<string>();

    MOCK_PROFESSIONALS.forEach(p => {
      if (p.name.toLowerCase().includes(lowerQuery)) {
        suggestions.add(p.name);
      }
      if (p.role.toLowerCase().includes(lowerQuery)) {
        suggestions.add(p.role);
      }
      p.skills.forEach(s => {
        if (s.toLowerCase().includes(lowerQuery)) {
          suggestions.add(s);
        }
      });
    });

    return Array.from(suggestions).slice(0, limit);
  }
}

export const searchService = SearchService.getInstance();
