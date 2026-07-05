import { supabase } from '../database/supabase';
import bcrypt from 'bcrypt';

export interface RegisterInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  location?: string;
  role?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    isVerified: boolean;
  };
  token: string;
}

class AuthService {
  async register(input: RegisterInput): Promise<AuthResponse> {
    const { email, password, firstName, lastName, phone, location, role = 'CUSTOMER' } = input;

    console.log('Register attempt:', { email, firstName, lastName, role });

    // Check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (checkError) {
      console.error('Check user error:', checkError);
    }

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const { data: user, error } = await supabase
      .from('users')
      .insert({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
        location,
        role,
      })
      .select('id, email, firstName, lastName, role, isVerified')
      .single();

    if (error || !user) {
      console.error('Supabase insert error:', error);
      throw new Error(error?.message || 'Failed to create user');
    }

    console.log('User created successfully:', user.id);

    // Generate simple token (in production, use JWT)
    const token = this.generateToken(user.id);

    return {
      user,
      token,
    };
  }

  async login(input: LoginInput): Promise<AuthResponse> {
    const { email, password } = input;

    // Find user
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid email or password');
    }

    // Update online status
    await supabase
      .from('users')
      .update({ isOnline: true })
      .eq('id', user.id);

    // Generate token
    const token = this.generateToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        isVerified: user.isVerified,
      },
      token,
    };
  }

  async logout(userId: string): Promise<void> {
    // Update online status
    await supabase
      .from('users')
      .update({ isOnline: false })
      .eq('id', userId);
  }

  async getUserById(userId: string) {
    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, firstName, lastName, phone, location, avatar, role, isVerified, isOnline, createdAt')
      .eq('id', userId)
      .single();

    if (error || !user) {
      throw new Error('User not found');
    }

    return user;
  }

  async updateOnlineStatus(userId: string, isOnline: boolean): Promise<void> {
    await supabase
      .from('users')
      .update({ isOnline })
      .eq('id', userId);
  }

  private generateToken(userId: string): string {
    // Simple token generation (in production, use JWT)
    return Buffer.from(`${userId}:${Date.now()}`).toString('base64');
  }

  async verifyToken(token: string): Promise<{ userId: string } | null> {
    try {
      const decoded = Buffer.from(token, 'base64').toString('utf-8');
      const [userId] = decoded.split(':');
      
      const { data: user } = await supabase
        .from('users')
        .select('id')
        .eq('id', userId)
        .single();

      if (!user) {
        return null;
      }

      return { userId };
    } catch {
      return null;
    }
  }
}

export const authService = new AuthService();
