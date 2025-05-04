import { FC, ReactNode } from 'react';
/**
 * NotificationProvider component
 *
 * @brief
 * Context provider that manages and displays notification toasts.
 *
 * @intro
 * Provides `add` and `remove` methods to display timed notification messages of different types
 * (info, warn, error) using animated transitions. Notifications are rendered via portal
 * and automatically removed after a delay.
 *
 * @example
 * import { NotificationProvider } from '@lite-u/ui'
 *
 * <NotificationProvider>
 *   <App />
 * </NotificationProvider>
 */
declare const NotificationProvider: FC<{
    children: ReactNode;
}>;
export default NotificationProvider;
