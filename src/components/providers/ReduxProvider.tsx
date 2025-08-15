'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';
import { validateToken, setToken } from '../../store/slices/authSlice';
import { setTheme } from '../../store/slices/uiSlice';

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (savedTheme) {
      store.dispatch(setTheme(savedTheme));
    }

    // Initialize auth token from localStorage
    const token = localStorage.getItem('auth_token');
    if (token) {
      store.dispatch(setToken(token));
      store.dispatch(validateToken(token));
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
