import { createContext, useContext } from 'react';
/**
 * NotificationContext
 *
 * @brief
 * React context for managing global notification toasts.
 *
 * @intro
 * Provides shared state and methods (`add`, `remove`) for handling notification messages
 * throughout the application. Used by `NotificationProvider` to supply context values.
 *
 * @example
 * import { useNotification } from '@lite-u/ui'
 *
 * const { add } = useNotification()
 * add('Saved successfully!', 'info')
 */
export const NotificationContext = createContext({
    notifications: [],
    add: () => { },
    remove: () => { },
});
export const useNotification = () => useContext(NotificationContext);
