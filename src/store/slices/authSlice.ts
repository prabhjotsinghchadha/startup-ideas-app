import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import type {
  AuthState,
  User,
  LoginCredentials,
  RegisterCredentials,
  ApiResponse
} from '../../models';

// Async thunks for API calls
export const loginUser = createAsyncThunk<
  { user: User; token: string },
  LoginCredentials,
  { rejectValue: string }
>('auth/loginUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      const error = await response.json();

      return rejectWithValue(error.message || 'Login failed');
    }

    const data: ApiResponse<{ user: User; token: string }> = await response.json();

    // Store token in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', data.data.token);
    }

    return data.data;
  } catch {
    return rejectWithValue('Network error occurred');
  }
});

export const registerUser = createAsyncThunk<
  { user: User; token: string },
  RegisterCredentials,
  { rejectValue: string }
>('auth/registerUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      const error = await response.json();

      return rejectWithValue(error.message || 'Registration failed');
    }

    const data: ApiResponse<{ user: User; token: string }> = await response.json();

    // Store token in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', data.data.token);
    }

    return data.data;
  } catch {
    return rejectWithValue('Network error occurred');
  }
});

export const validateToken = createAsyncThunk<User, string, { rejectValue: string }>(
  'auth/validateToken',
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/validate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        return rejectWithValue('Token validation failed');
      }

      const data: ApiResponse<User> = await response.json();

      return data.data;
    } catch {
      return rejectWithValue('Network error occurred');
    }
  }
);

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  token: null
};

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;

      // Remove token from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    }
  },
  extraReducers: (builder) => {
    // Login user
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Login failed';
        state.isAuthenticated = false;
      });

    // Register user
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Registration failed';
        state.isAuthenticated = false;
      });

    // Validate token
    builder
      .addCase(validateToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validateToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(validateToken.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;

        // Remove invalid token
        if (typeof window !== 'undefined') {
          localStorage.removeItem('auth_token');
        }
      });
  }
});

export const { logout, clearError, setToken, updateUser } = authSlice.actions;
export default authSlice.reducer;
