import { createSelector } from '@reduxjs/toolkit';

import type { UIState, UserState } from '../../models';
import type { RootState } from '../index';

// Auth selectors
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const selectAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthToken = (state: RootState) => state.auth.token;

// UI selectors
export const selectUI = (state: RootState) => state.ui;
export const selectTheme = (state: RootState) => (state.ui as UIState).theme;
export const selectSidebarOpen = (state: RootState) => (state.ui as UIState).sidebarOpen;
export const selectNotifications = (state: RootState) => (state.ui as UIState).notifications;
export const selectActiveModal = (state: RootState) => (state.ui as UIState).activeModal;
export const selectUILoading = (state: RootState) => (state.ui as UIState).loading;

// User selectors
export const selectUsers = (state: RootState) => (state.user as UserState).users;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectUserLoading = (state: RootState) => (state.user as UserState).loading;
export const selectUserError = (state: RootState) => (state.user as UserState).error;
export const selectCurrentPage = (state: RootState) => (state.user as UserState).currentPage;
export const selectTotalPages = (state: RootState) => (state.user as UserState).totalPages;

// Memoized selectors
export const selectUnreadNotifications = createSelector(
  [selectNotifications],
  (notifications: Notification[]) =>
    notifications.filter((notification: Notification) => !notification.read)
);

export const selectUnreadNotificationCount = createSelector(
  [selectUnreadNotifications],
  (unreadNotifications: Notification[]) => unreadNotifications.length
);

export const selectNotificationsByType = createSelector(
  [selectNotifications, (_, type: string) => type],
  (notifications: Notification[], type: string) =>
    notifications.filter((notification: Notification) => notification.type === type)
);

export const selectModalState = createSelector(
  [selectModals, (_, modalName: string) => modalName],
  (modals: Record<string, boolean>, modalName: string) => modals[modalName] || false
);

export const selectUserById = createSelector(
  [selectUsers, (_, userId: string) => userId],
  (users: User[], userId: string) => users.find((user: User) => user.id === userId)
);

export const selectIsCurrentUser = createSelector(
  [selectUser, (_, userId: string) => userId],
  (currentUser, userId) => currentUser?.id === userId
);

// Complex selectors
export const selectAuthenticatedUserProfile = createSelector(
  [selectUser, selectIsAuthenticated],
  (user, isAuthenticated) => (isAuthenticated ? user : null)
);

export const selectAppLoadingState = createSelector(
  [selectAuthLoading, selectUserLoading, selectGlobalLoading],
  (authLoading, userLoading, globalLoading) => authLoading || userLoading || globalLoading
);

export const selectHasErrors = createSelector(
  [selectAuthError, selectUserError],
  (authError, userError) => !!(authError || userError)
);

export const selectAllErrors = createSelector(
  [selectAuthError, selectUserError],
  (authError, userError) => {
    const errors: string[] = [];
    if (authError) errors.push(authError);
    if (userError) errors.push(userError);

    return errors;
  }
);
