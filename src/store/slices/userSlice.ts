import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import type { User, ApiResponse, PaginatedResponse } from '../../models';

interface UserState {
  users: User[];
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Async thunks
export const fetchUsers = createAsyncThunk<
  PaginatedResponse<User>,
  { page?: number; limit?: number; search?: string },
  { rejectValue: string }
>('user/fetchUsers', async (params = {}, { rejectWithValue }) => {
  try {
    const { page = 1, limit = 10, search = '' } = params;
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(search && { search })
    });

    const response = await fetch(`/api/users?${queryParams}`);

    if (!response.ok) {
      const error = await response.json();

      return rejectWithValue(error.message || 'Failed to fetch users');
    }

    const data: ApiResponse<PaginatedResponse<User>> = await response.json();

    return data.data;
  } catch {
    return rejectWithValue('Network error occurred');
  }
});

export const fetchUserById = createAsyncThunk<User, string, { rejectValue: string }>(
  'user/fetchUserById',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/users/${userId}`);

      if (!response.ok) {
        const error = await response.json();

        return rejectWithValue(error.message || 'Failed to fetch user');
      }

      const data: ApiResponse<User> = await response.json();

      return data.data;
    } catch {
      return rejectWithValue('Network error occurred');
    }
  }
);

export const updateUserProfile = createAsyncThunk<
  User,
  { userId: string; updates: Partial<User> },
  { rejectValue: string }
>('user/updateUserProfile', async ({ userId, updates }, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates)
    });

    if (!response.ok) {
      const error = await response.json();

      return rejectWithValue(error.message || 'Failed to update user');
    }

    const data: ApiResponse<User> = await response.json();

    return data.data;
  } catch {
    return rejectWithValue('Network error occurred');
  }
});

export const deleteUser = createAsyncThunk<string, string, { rejectValue: string }>(
  'user/deleteUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const error = await response.json();

        return rejectWithValue(error.message || 'Failed to delete user');
      }

      return userId;
    } catch {
      return rejectWithValue('Network error occurred');
    }
  }
);

// Initial state
const initialState: UserState = {
  users: [],
  currentUser: null,
  isLoading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  }
};

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    updateUserInList: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    removeUserFromList: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    clearUsers: (state) => {
      state.users = [];
      state.pagination = initialState.pagination;
    }
  },
  extraReducers: (builder) => {
    // Fetch users
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.data;
        state.pagination = action.payload.pagination;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch users';
      });

    // Fetch user by ID
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch user';
      });

    // Update user profile
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;

        // Update user in list if it exists
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }

        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to update user';
      });

    // Delete user
    builder
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);

        if (state.currentUser?.id === action.payload) {
          state.currentUser = null;
        }

        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to delete user';
      });
  }
});

export const { clearError, setCurrentUser, updateUserInList, removeUserFromList, clearUsers } =
  userSlice.actions;

export default userSlice.reducer;
