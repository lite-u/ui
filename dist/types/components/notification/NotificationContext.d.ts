import { ReactNode } from 'react';
export interface NotificationItemProps {
    id: string;
    comp: ReactNode;
    type: 'info' | 'suc' | 'warn' | 'error';
    anim: boolean;
    timer: number;
}
interface NotificationContextType {
    /**
     * List of currently displayed notifications.
     */
    notifications: NotificationItemProps[];
    /**
     * Adds a new notification.
     *
     * @param comp - The content of the notification.
     * @param type - Notification type: 'info', 'suc', 'warn', or 'error'.
     * @param delay - Time in ms before auto-removal. If false, notification persists.
     * @returns A unique ID for the notification.
     */
    add: (comp: ReactNode, type?: NotificationItemProps['type'], delay?: number | false) => string;
    /**
     * Removes a notification by ID.
     *
     * @param id - ID of the notification to remove.
     */
    remove: (id: NotificationItemProps['id']) => void;
}
/**
 * NotificationContext
 *
 * @brief
 * React context for global toast notification state and actions.
 *
 * @intro
 * Provides access to a list of active notifications and functions to add or remove them.
 * Each notification can include content, type (info, success, warning, error), and an optional timeout.
 *
 * @example
 * const { add, remove } = useNotification()
 * add('Upload complete', 'suc', 3000)
 */
/**
 * Shape of the notification context including list of notifications and management functions.
 */
declare const NotificationContext: import("react").Context<NotificationContextType>;
export default NotificationContext;
export declare const useNotification: () => NotificationContextType;
