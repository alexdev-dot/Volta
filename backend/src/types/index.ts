// User Types
export interface User {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  role: 'customer' | 'professional';
  password: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Session {
  email: string;
  loggedIn: boolean;
  role: 'customer' | 'professional';
  userId: string;
  expiresAt: string;
}

// Professional Types
export interface ProfessionalProfile {
  userId: string;
  skills: string[];
  experience: string;
  hourlyRate: number;
  availability: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  bio: string;
  certifications: Certification[];
  portfolio: PortfolioItem[];
  verified: boolean;
  rating: number;
  reviewCount: number;
  completedJobs: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  documentUrl?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

// Booking Types
export interface Booking {
  id: string;
  customerId: string;
  professionalId: string;
  service: string;
  description: string;
  scheduledDate: string;
  scheduledTime: string;
  duration: number; // in hours
  price: number;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  location: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookingFilters {
  customerId?: string;
  professionalId?: string;
  status?: Booking['status'];
  startDate?: string;
  endDate?: string;
}

// Chat Types
export interface Message {
  id: string;
  bookingId?: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participant1Id: string;
  participant2Id: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  bookingId?: string;
}

// Payment Types
export interface Payment {
  id: string;
  bookingId: string;
  customerId: string;
  professionalId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  transactionId?: string;
  promoCode?: string;
  discountAmount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentMethod {
  id: string;
  userId: string;
  type: 'card' | 'mpesa' | 'bank_transfer';
  details: Record<string, any>;
  isDefault: boolean;
  createdAt: string;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'booking' | 'message' | 'payment' | 'review' | 'system';
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  createdAt: string;
}

// Review Types
export interface Review {
  id: string;
  bookingId: string;
  customerId: string;
  professionalId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  basePrice: number;
  estimatedDuration: number;
}

// Search/Filter Types
export interface SearchFilters {
  query?: string;
  category?: string;
  location?: string;
  minRating?: number;
  maxPrice?: number;
  availability?: 'available_now' | 'today' | 'this_week';
  sortBy?: 'rating' | 'distance' | 'price_low' | 'price_high';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
