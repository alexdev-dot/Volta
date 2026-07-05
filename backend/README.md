# VOLTA Backend Logic

A comprehensive backend logic layer for the VOLTA Marketplace platform, built with TypeScript and using LocalStorage for data persistence.

## Structure

```
backend/
├── src/
│   ├── types/           # TypeScript interfaces and types
│   ├── storage/         # Data storage layer (LocalStorage)
│   ├── services/        # Business logic services
│   ├── middleware/      # Authentication and authorization middleware
│   ├── utils/           # Utility functions and helpers
│   └── index.ts         # Main entry point
├── package.json
├── tsconfig.json
└── README.md
```

## Services

### AuthService
Handles user authentication and session management.
- `register()` - Register new user
- `login()` - Login user
- `logout()` - Logout user
- `isAuthenticated()` - Check authentication status
- `hasRole()` - Check user role
- `updatePassword()` - Update user password

### UserService
Manages user CRUD operations.
- `getUserById()` - Get user by ID
- `getUserByEmail()` - Get user by email
- `updateUser()` - Update user profile
- `deleteUser()` - Delete user account
- `searchUsers()` - Search users by name/email

### BookingService
Handles booking operations.
- `createBooking()` - Create new booking
- `getBookingById()` - Get booking by ID
- `getBookings()` - Get bookings with filters
- `updateBookingStatus()` - Update booking status
- `updateBooking()` - Update booking details
- `cancelBooking()` - Cancel booking
- `getCustomerBookingStats()` - Get customer booking statistics
- `getProfessionalBookingStats()` - Get professional booking statistics

### ProfessionalService
Manages professional profiles.
- `getProfessionalProfile()` - Get professional profile
- `createOrUpdateProfile()` - Create or update profile
- `updateRating()` - Update professional rating
- `addCertification()` - Add certification
- `addPortfolioItem()` - Add portfolio item
- `getVerifiedProfessionals()` - Get verified professionals
- `searchProfessionalsBySkills()` - Search by skills

### ChatService
Handles messaging and conversations.
- `sendMessage()` - Send message
- `getMessages()` - Get messages between users
- `markMessagesAsRead()` - Mark messages as read
- `getUserConversations()` - Get user conversations
- `deleteConversation()` - Delete conversation
- `getUnreadCount()` - Get unread message count

### PaymentService
Handles payment processing and payment methods.
- `createPayment()` - Create payment
- `processPayment()` - Process payment
- `refundPayment()` - Refund payment
- `addPaymentMethod()` - Add payment method
- `getUserPaymentMethods()` - Get user payment methods
- `validatePromoCode()` - Validate promo code
- `getCustomerPaymentStats()` - Get payment statistics

### SearchService
Handles search and filtering of professionals.
- `searchProfessionals()` - Search with filters
- `getProfessionalById()` - Get professional by ID
- `getTopRatedProfessionals()` - Get top rated
- `getProfessionalsNearLocation()` - Get nearby professionals
- `getCategories()` - Get available categories
- `getSearchSuggestions()` - Get autocomplete suggestions

### NotificationService
Handles notification management.
- `createNotification()` - Create notification
- `getUserNotifications()` - Get user notifications
- `markAsRead()` - Mark as read
- `markAllAsRead()` - Mark all as read
- `deleteNotification()` - Delete notification
- `getUnreadCount()` - Get unread count
- `createBookingNotification()` - Create booking notification
- `createMessageNotification()` - Create message notification

## Storage

The storage layer uses LocalStorage for data persistence. All data is stored as JSON strings with the following keys:

- `volta_users` - User accounts
- `volta_session` - Current session
- `volta_user` - Current user
- `volta_bookings` - Bookings
- `volta_messages` - Messages
- `volta_conversations` - Conversations
- `volta_payments` - Payments
- `volta_payment_methods` - Payment methods
- `volta_notifications` - Notifications
- `volta_reviews` - Reviews
- `volta_professional_profiles` - Professional profiles

## Middleware

### AuthMiddleware
Provides authentication and authorization checks.
- `isAuthenticated()` - Check if user is authenticated
- `hasRole()` - Check if user has specific role
- `isResourceOwner()` - Check if user owns a resource
- `getCurrentUser()` - Get current user
- `requireAuth()` - Require authentication (throws error)
- `requireRole()` - Require specific role (throws error)

## Usage

### Installation

```bash
cd backend
npm install
```

### Build

```bash
npm run build
```

### Development

```bash
npm run dev
```

### Importing in Frontend

```typescript
import { 
  authService, 
  bookingService, 
  searchService,
  AuthMiddleware 
} from '../backend/src';

// Register a new user
const result = await authService.register({
  fullName: 'John Doe',
  email: 'john@example.com',
  phone: '+254700000000',
  location: 'Nairobi, Kenya',
  password: 'password123',
  role: 'customer'
});

// Search for professionals
const results = searchService.searchProfessionals({
  query: 'plumber',
  location: 'Nairobi',
  minRating: 4.5,
  sortBy: 'rating'
});

// Check authentication
const authResult = AuthMiddleware.isAuthenticated();
if (authResult.success) {
  const user = AuthMiddleware.getCurrentUser();
}
```

## API Response Format

All service methods return an `ApiResponse<T>` object:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
```

## Data Models

### User
```typescript
{
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
```

### Booking
```typescript
{
  id: string;
  customerId: string;
  professionalId: string;
  service: string;
  description: string;
  scheduledDate: string;
  scheduledTime: string;
  duration: number;
  price: number;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  location: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

## Notes

- This is a client-side backend implementation using LocalStorage
- In production, replace the storage layer with a real database (PostgreSQL, MongoDB, etc.)
- Passwords are stored in plain text - in production, use bcrypt or similar for hashing
- Payment processing is simulated - integrate with M-Pesa, Stripe, or similar in production
- Search uses mock data - connect to real database in production

## Future Enhancements

- Add real database integration
- Implement proper password hashing
- Add email verification
- Implement real-time notifications (WebSocket)
- Add file upload handling for avatars and portfolio
- Implement proper payment gateway integration
- Add rate limiting and request throttling
- Implement caching layer
- Add logging and monitoring
