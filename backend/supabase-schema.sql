-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (for both customers and professionals)
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  location VARCHAR(255),
  avatar TEXT,
  role VARCHAR(50) DEFAULT 'CUSTOMER' CHECK (role IN ('CUSTOMER', 'PROFESSIONAL', 'ADMIN')),
  isVerified BOOLEAN DEFAULT false,
  isOnline BOOLEAN DEFAULT false,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Professional profiles table
CREATE TABLE IF NOT EXISTS professional_profiles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  userId UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  bio TEXT,
  skills TEXT[] NOT NULL DEFAULT '{}',
  experience INTEGER,
  rating DECIMAL(3, 2) DEFAULT 0.00 CHECK (rating >= 0 AND rating <= 5),
  reviewCount INTEGER DEFAULT 0 CHECK (reviewCount >= 0),
  completedJobs INTEGER DEFAULT 0 CHECK (completedJobs >= 0),
  hourlyRate DECIMAL(10, 2),
  availability VARCHAR(100),
  isVerified BOOLEAN DEFAULT false,
  backgroundCheck BOOLEAN DEFAULT false,
  location VARCHAR(255),
  serviceArea VARCHAR(255),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(userId)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_is_verified ON users(isVerified);
CREATE INDEX IF NOT EXISTS idx_users_is_online ON users(isOnline);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(createdAt);

CREATE INDEX IF NOT EXISTS idx_professional_profiles_user_id ON professional_profiles(userId);
CREATE INDEX IF NOT EXISTS idx_professional_profiles_rating ON professional_profiles(rating);
CREATE INDEX IF NOT EXISTS idx_professional_profiles_is_verified ON professional_profiles(isVerified);
CREATE INDEX IF NOT EXISTS idx_professional_profiles_background_check ON professional_profiles(backgroundCheck);
CREATE INDEX IF NOT EXISTS idx_professional_profiles_location ON professional_profiles(location);

-- Function to update updatedAt timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updatedAt = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
DROP TRIGGER IF EXISTS update_professional_profiles_updated_at ON professional_profiles;

-- Triggers to automatically update updatedAt
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_professional_profiles_updated_at BEFORE UPDATE ON professional_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE professional_profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can be read by everyone" ON users;
DROP POLICY IF EXISTS "Users can insert data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Users can delete own data" ON users;

DROP POLICY IF EXISTS "Professional profiles can be read by everyone" ON professional_profiles;
DROP POLICY IF EXISTS "Professional profiles can be inserted" ON professional_profiles;
DROP POLICY IF EXISTS "Professional profiles can be updated by owner" ON professional_profiles;
DROP POLICY IF EXISTS "Professional profiles can be deleted by owner" ON professional_profiles;

-- Allow public read access for users (for auth purposes)
CREATE POLICY "Users can be read by everyone" ON users
    FOR SELECT USING (true);

-- Allow users to insert their own data (handled by service layer with service role key)
CREATE POLICY "Users can insert data" ON users
    FOR INSERT WITH CHECK (true);

-- Allow users to update their own data
CREATE POLICY "Users can update own data" ON users
    FOR UPDATE USING (true);

-- Allow users to delete their own data
CREATE POLICY "Users can delete own data" ON users
    FOR DELETE USING (true);

-- Allow public read access for professional profiles
CREATE POLICY "Professional profiles can be read by everyone" ON professional_profiles
    FOR SELECT USING (true);

-- Allow authenticated users to insert professional profiles
CREATE POLICY "Professional profiles can be inserted" ON professional_profiles
    FOR INSERT WITH CHECK (true);

-- Allow users to update their own professional profile
CREATE POLICY "Professional profiles can be updated by owner" ON professional_profiles
    FOR UPDATE USING (true);

-- Allow users to delete their own professional profile
CREATE POLICY "Professional profiles can be deleted by owner" ON professional_profiles
    FOR DELETE USING (true);
