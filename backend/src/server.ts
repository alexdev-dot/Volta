import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authService } from './services/auth.service';
import { userService } from './services/user.service';
import { supabase } from './database/supabase';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection check
async function checkDatabaseConnection() {
  try {
    const { data, error } = await supabase.from('users').select('id').limit(1);
    if (error) throw error;
    return { connected: true, message: 'Database connected successfully' };
  } catch (error: any) {
    return { connected: false, message: `Database connection failed: ${error.message}` };
  }
}

// Health check with database status
app.get('/health', async (req, res) => {
  const dbStatus = await checkDatabaseConnection();
  res.json({
    status: 'ok',
    message: 'VOLTA API is running',
    database: dbStatus
  });
});

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone, location, role } = req.body;
    
    const result = await authService.register({
      email,
      password,
      firstName,
      lastName,
      phone,
      location,
      role,
    });
    
    res.status(201).json(result);
  } catch (error: any) {
    console.error('Registration error:', error);
    res.status(400).json({ error: error.message || 'Registration failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const result = await authService.login({ email, password });
    
    res.status(200).json(result);
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(401).json({ error: error.message || 'Login failed' });
  }
});

app.post('/api/auth/logout', async (req, res) => {
  try {
    const { userId } = req.body;
    
    if (userId) {
      await authService.logout(userId);
    }
    
    res.status(200).json({ message: 'Logout successful' });
  } catch (error: any) {
    console.error('Logout error:', error);
    res.status(500).json({ error: error.message || 'Logout failed' });
  }
});

app.get('/api/auth/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await authService.getUserById(userId);
    
    res.status(200).json(user);
  } catch (error: any) {
    console.error('Get user error:', error);
    res.status(404).json({ error: error.message || 'User not found' });
  }
});

// User routes
app.get('/api/users', async (req, res) => {
  try {
    const { role, isVerified, isOnline } = req.query;
    
    const filters: any = {};
    if (role) filters.role = role;
    if (isVerified !== undefined) filters.isVerified = isVerified === 'true';
    if (isOnline !== undefined) filters.isOnline = isOnline === 'true';
    
    const users = await userService.getAllUsers(filters);
    
    res.status(200).json(users);
  } catch (error: any) {
    console.error('Get users error:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch users' });
  }
});

app.get('/api/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await userService.getProfile(userId);
    
    res.status(200).json(user);
  } catch (error: any) {
    console.error('Get user profile error:', error);
    res.status(404).json({ error: error.message || 'User not found' });
  }
});

app.put('/api/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const updates = req.body;
    
    const user = await userService.updateProfile(userId, updates);
    
    res.status(200).json(user);
  } catch (error: any) {
    console.error('Update user error:', error);
    res.status(400).json({ error: error.message || 'Failed to update user' });
  }
});

app.delete('/api/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    await userService.deleteAccount(userId);
    
    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error: any) {
    console.error('Delete user error:', error);
    res.status(400).json({ error: error.message || 'Failed to delete account' });
  }
});

// Start server
app.listen(PORT, async () => {
  console.log(`VOLTA API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  
  // Check database connection on startup
  try {
    const dbStatus = await checkDatabaseConnection();
    if (dbStatus.connected) {
      console.log(`✅ ${dbStatus.message}`);
    } else {
      console.log(`❌ ${dbStatus.message}`);
    }
  } catch (error) {
    console.error('Database check failed:', error);
  }
}).on('error', (error) => {
  console.error('Server error:', error);
});

export default app;
