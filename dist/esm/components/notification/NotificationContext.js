import { createContext, useContext } from 'react';
const NotificationContext = createContext({
    notifications: [],
    add: () => '',
    remove: () => { },
});
export default NotificationContext;
export const useNotification = () => useContext(NotificationContext);
