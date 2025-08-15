'use client';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectTheme,
  selectSidebarOpen,
  selectNotifications,
  selectUnreadNotificationCount,
  selectModalState
} from '../../store/selectors';
import {
  setTheme,
  toggleSidebar,
  addNotification,
  removeNotification,
  markAllNotificationsAsRead,
  openModal,
  closeModal
} from '../../store/slices/uiSlice';

export default function UIExample() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const sidebarOpen = useAppSelector(selectSidebarOpen);
  const notifications = useAppSelector(selectNotifications);
  const unreadCount = useAppSelector(selectUnreadNotificationCount);
  const isModalOpen = useAppSelector((state) => selectModalState(state, 'example'));

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    dispatch(setTheme(newTheme));
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleAddNotification = (type: 'success' | 'error' | 'warning' | 'info') => {
    dispatch(
      addNotification({
        type,
        title: `${type.charAt(0).toUpperCase() + type.slice(1)} Notification`,
        message: `This is a ${type} notification message created at ${new Date().toLocaleTimeString()}`
      })
    );
  };

  const handleRemoveNotification = (id: string) => {
    dispatch(removeNotification(id));
  };

  const handleMarkAllAsRead = () => {
    dispatch(markAllNotificationsAsRead());
  };

  const handleToggleModal = () => {
    if (isModalOpen) {
      dispatch(closeModal('example'));
    } else {
      dispatch(openModal('example'));
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">UI State Management Example</h2>

        {/* Theme Controls */}
        <div className="mb-6">
          <h3 className="mb-2 font-medium">Theme Control</h3>
          <p className="mb-2 text-sm text-gray-600">Current theme: {theme}</p>
          <div className="space-x-2">
            {(['light', 'dark', 'system'] as const).map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => handleThemeChange(themeOption)}
                className={`rounded px-3 py-1 text-sm ${
                  theme === themeOption
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {themeOption}
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar Control */}
        <div className="mb-6">
          <h3 className="mb-2 font-medium">Sidebar Control</h3>
          <p className="mb-2 text-sm text-gray-600">Sidebar is {sidebarOpen ? 'open' : 'closed'}</p>
          <button
            onClick={handleToggleSidebar}
            className="rounded bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600"
          >
            Toggle Sidebar
          </button>
        </div>

        {/* Modal Control */}
        <div className="mb-6">
          <h3 className="mb-2 font-medium">Modal Control</h3>
          <p className="mb-2 text-sm text-gray-600">Modal is {isModalOpen ? 'open' : 'closed'}</p>
          <button
            onClick={handleToggleModal}
            className="rounded bg-purple-500 px-3 py-1 text-sm text-white hover:bg-purple-600"
          >
            Toggle Modal
          </button>
        </div>

        {/* Notification Controls */}
        <div>
          <h3 className="mb-2 font-medium">
            Notifications ({notifications.length} total, {unreadCount} unread)
          </h3>
          <div className="mb-4 space-x-2">
            {(['success', 'error', 'warning', 'info'] as const).map((type) => (
              <button
                key={type}
                onClick={() => handleAddNotification(type)}
                className={`rounded px-3 py-1 text-sm text-white ${
                  type === 'success'
                    ? 'bg-green-500 hover:bg-green-600'
                    : type === 'error'
                      ? 'bg-red-500 hover:bg-red-600'
                      : type === 'warning'
                        ? 'bg-yellow-500 hover:bg-yellow-600'
                        : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                Add {type}
              </button>
            ))}
          </div>

          {notifications.length > 0 && (
            <div className="space-y-2">
              <button
                onClick={handleMarkAllAsRead}
                className="mb-2 rounded bg-gray-500 px-3 py-1 text-sm text-white hover:bg-gray-600"
              >
                Mark All as Read
              </button>
              <div className="max-h-40 space-y-2 overflow-y-auto">
                {notifications.slice(0, 5).map((notification) => (
                  <div
                    key={notification.id}
                    className={`rounded border p-2 text-sm ${
                      notification.read ? 'bg-gray-50' : 'bg-white border-blue-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-gray-600">{notification.message}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(notification.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveNotification(notification.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Example */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Example Modal</h3>
            <p className="mb-4">This modal state is managed by Redux!</p>
            <button
              onClick={handleToggleModal}
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
