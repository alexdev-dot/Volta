import { User, Session, Booking, Message, Conversation, Payment, PaymentMethod, Notification, Review, ProfessionalProfile } from '../types';

/**
 * LocalStorage-based storage layer
 * In production, this would be replaced with a real database
 */
export class Storage {
  private static instance: Storage;

  private constructor() {}

  static getInstance(): Storage {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }

  // Generic storage methods
  private get<T>(key: string): T[] {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(`Error reading ${key}:`, error);
      return [];
    }
  }

  private set<T>(key: string, data: T[]): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error writing ${key}:`, error);
    }
  }

  // User storage
  getUsers(): User[] {
    return this.get<User>('volta_users');
  }

  setUsers(users: User[]): void {
    this.set('volta_users', users);
  }

  getUserByEmail(email: string): User | undefined {
    const users = this.getUsers();
    return users.find(u => u.email === email);
  }

  getUserById(id: string): User | undefined {
    const users = this.getUsers();
    return users.find(u => u.id === id);
  }

  addUser(user: User): void {
    const users = this.getUsers();
    users.push(user);
    this.setUsers(users);
  }

  updateUser(id: string, updates: Partial<User>): User | null {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    
    users[index] = { ...users[index], ...updates, updatedAt: new Date().toISOString() };
    this.setUsers(users);
    return users[index];
  }

  deleteUser(id: string): boolean {
    const users = this.getUsers();
    const filtered = users.filter(u => u.id !== id);
    if (filtered.length === users.length) return false;
    this.setUsers(filtered);
    return true;
  }

  // Session storage
  getSession(): Session | null {
    try {
      const session = localStorage.getItem('volta_session');
      return session ? JSON.parse(session) : null;
    } catch (error) {
      console.error('Error reading session:', error);
      return null;
    }
  }

  setSession(session: Session): void {
    try {
      localStorage.setItem('volta_session', JSON.stringify(session));
    } catch (error) {
      console.error('Error writing session:', error);
    }
  }

  clearSession(): void {
    localStorage.removeItem('volta_session');
  }

  // Current user storage
  getCurrentUser(): User | null {
    try {
      const user = localStorage.getItem('volta_user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error reading current user:', error);
      return null;
    }
  }

  setCurrentUser(user: User): void {
    try {
      localStorage.setItem('volta_user', JSON.stringify(user));
    } catch (error) {
      console.error('Error writing current user:', error);
    }
  }

  clearCurrentUser(): void {
    localStorage.removeItem('volta_user');
  }

  // Booking storage
  getBookings(): Booking[] {
    return this.get<Booking>('volta_bookings');
  }

  setBookings(bookings: Booking[]): void {
    this.set('volta_bookings', bookings);
  }

  getBookingById(id: string): Booking | undefined {
    const bookings = this.getBookings();
    return bookings.find(b => b.id === id);
  }

  addBooking(booking: Booking): void {
    const bookings = this.getBookings();
    bookings.push(booking);
    this.setBookings(bookings);
  }

  updateBooking(id: string, updates: Partial<Booking>): Booking | null {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === id);
    if (index === -1) return null;
    
    bookings[index] = { ...bookings[index], ...updates, updatedAt: new Date().toISOString() };
    this.setBookings(bookings);
    return bookings[index];
  }

  deleteBooking(id: string): boolean {
    const bookings = this.getBookings();
    const filtered = bookings.filter(b => b.id !== id);
    if (filtered.length === bookings.length) return false;
    this.setBookings(filtered);
    return true;
  }

  // Message storage
  getMessages(): Message[] {
    return this.get<Message>('volta_messages');
  }

  setMessages(messages: Message[]): void {
    this.set('volta_messages', messages);
  }

  getMessagesByConversation(participant1Id: string, participant2Id: string): Message[] {
    const messages = this.getMessages();
    return messages.filter(m => 
      (m.senderId === participant1Id && m.receiverId === participant2Id) ||
      (m.senderId === participant2Id && m.receiverId === participant1Id)
    ).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  }

  addMessage(message: Message): void {
    const messages = this.getMessages();
    messages.push(message);
    this.setMessages(messages);
  }

  markMessagesAsRead(senderId: string, receiverId: string): void {
    const messages = this.getMessages();
    messages.forEach(m => {
      if (m.senderId === senderId && m.receiverId === receiverId) {
        m.read = true;
      }
    });
    this.setMessages(messages);
  }

  // Conversation storage
  getConversations(): Conversation[] {
    return this.get<Conversation>('volta_conversations');
  }

  setConversations(conversations: Conversation[]): void {
    this.set('volta_conversations', conversations);
  }

  getConversationByParticipants(participant1Id: string, participant2Id: string): Conversation | undefined {
    const conversations = this.getConversations();
    return conversations.find(c => 
      (c.participant1Id === participant1Id && c.participant2Id === participant2Id) ||
      (c.participant1Id === participant2Id && c.participant2Id === participant1Id)
    );
  }

  addConversation(conversation: Conversation): void {
    const conversations = this.getConversations();
    conversations.push(conversation);
    this.setConversations(conversations);
  }

  updateConversation(id: string, updates: Partial<Conversation>): Conversation | null {
    const conversations = this.getConversations();
    const index = conversations.findIndex(c => c.id === id);
    if (index === -1) return null;
    
    conversations[index] = { ...conversations[index], ...updates };
    this.setConversations(conversations);
    return conversations[index];
  }

  getConversationById(id: string): Conversation | undefined {
    const conversations = this.getConversations();
    return conversations.find(c => c.id === id);
  }

  // Payment storage
  getPayments(): Payment[] {
    return this.get<Payment>('volta_payments');
  }

  setPayments(payments: Payment[]): void {
    this.set('volta_payments', payments);
  }

  getPaymentById(id: string): Payment | undefined {
    const payments = this.getPayments();
    return payments.find(p => p.id === id);
  }

  addPayment(payment: Payment): void {
    const payments = this.getPayments();
    payments.push(payment);
    this.setPayments(payments);
  }

  updatePayment(id: string, updates: Partial<Payment>): Payment | null {
    const payments = this.getPayments();
    const index = payments.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    payments[index] = { ...payments[index], ...updates, updatedAt: new Date().toISOString() };
    this.setPayments(payments);
    return payments[index];
  }

  // Payment method storage
  getPaymentMethods(): PaymentMethod[] {
    return this.get<PaymentMethod>('volta_payment_methods');
  }

  setPaymentMethods(methods: PaymentMethod[]): void {
    this.set('volta_payment_methods', methods);
  }

  getPaymentMethodsByUserId(userId: string): PaymentMethod[] {
    const methods = this.getPaymentMethods();
    return methods.filter(m => m.userId === userId);
  }

  addPaymentMethod(method: PaymentMethod): void {
    const methods = this.getPaymentMethods();
    methods.push(method);
    this.setPaymentMethods(methods);
  }

  deletePaymentMethod(id: string): boolean {
    const methods = this.getPaymentMethods();
    const filtered = methods.filter(m => m.id !== id);
    if (filtered.length === methods.length) return false;
    this.setPaymentMethods(filtered);
    return true;
  }

  updatePaymentMethod(id: string, updates: Partial<PaymentMethod>): PaymentMethod | null {
    const methods = this.getPaymentMethods();
    const index = methods.findIndex(m => m.id === id);
    if (index === -1) return null;
    
    methods[index] = { ...methods[index], ...updates };
    this.setPaymentMethods(methods);
    return methods[index];
  }

  // Notification storage
  getNotifications(): Notification[] {
    return this.get<Notification>('volta_notifications');
  }

  setNotifications(notifications: Notification[]): void {
    this.set('volta_notifications', notifications);
  }

  getNotificationsByUserId(userId: string): Notification[] {
    const notifications = this.getNotifications();
    return notifications.filter(n => n.userId === userId).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  addNotification(notification: Notification): void {
    const notifications = this.getNotifications();
    notifications.push(notification);
    this.setNotifications(notifications);
  }

  markNotificationAsRead(id: string): Notification | null {
    const notifications = this.getNotifications();
    const index = notifications.findIndex(n => n.id === id);
    if (index === -1) return null;
    
    notifications[index].read = true;
    this.setNotifications(notifications);
    return notifications[index];
  }

  markAllNotificationsAsRead(userId: string): void {
    const notifications = this.getNotifications();
    notifications.forEach(n => {
      if (n.userId === userId) {
        n.read = true;
      }
    });
    this.setNotifications(notifications);
  }

  getNotificationById(id: string): Notification | undefined {
    const notifications = this.getNotifications();
    return notifications.find(n => n.id === id);
  }

  // Review storage
  getReviews(): Review[] {
    return this.get<Review>('volta_reviews');
  }

  setReviews(reviews: Review[]): void {
    this.set('volta_reviews', reviews);
  }

  getReviewsByProfessionalId(professionalId: string): Review[] {
    const reviews = this.getReviews();
    return reviews.filter(r => r.professionalId === professionalId);
  }

  addReview(review: Review): void {
    const reviews = this.getReviews();
    reviews.push(review);
    this.setReviews(reviews);
  }

  // Professional profile storage
  getProfessionalProfiles(): ProfessionalProfile[] {
    return this.get<ProfessionalProfile>('volta_professional_profiles');
  }

  setProfessionalProfiles(profiles: ProfessionalProfile[]): void {
    this.set('volta_professional_profiles', profiles);
  }

  getProfessionalProfileByUserId(userId: string): ProfessionalProfile | undefined {
    const profiles = this.getProfessionalProfiles();
    return profiles.find(p => p.userId === userId);
  }

  addProfessionalProfile(profile: ProfessionalProfile): void {
    const profiles = this.getProfessionalProfiles();
    profiles.push(profile);
    this.setProfessionalProfiles(profiles);
  }

  updateProfessionalProfile(userId: string, updates: Partial<ProfessionalProfile>): ProfessionalProfile | null {
    const profiles = this.getProfessionalProfiles();
    const index = profiles.findIndex(p => p.userId === userId);
    if (index === -1) return null;
    
    profiles[index] = { ...profiles[index], ...updates };
    this.setProfessionalProfiles(profiles);
    return profiles[index];
  }

  // Clear all data (for testing)
  clearAll(): void {
    localStorage.removeItem('volta_users');
    localStorage.removeItem('volta_session');
    localStorage.removeItem('volta_user');
    localStorage.removeItem('volta_bookings');
    localStorage.removeItem('volta_messages');
    localStorage.removeItem('volta_conversations');
    localStorage.removeItem('volta_payments');
    localStorage.removeItem('volta_payment_methods');
    localStorage.removeItem('volta_notifications');
    localStorage.removeItem('volta_reviews');
    localStorage.removeItem('volta_professional_profiles');
  }
}

export const storage = Storage.getInstance();
