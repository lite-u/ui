import { createContext, useContext } from 'react';
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
const NotificationContext = createContext({
    notifications: [],
    add: () => '',
    remove: () => { },
});
export default NotificationContext;
export const useNotification = () => useContext(NotificationContext);
