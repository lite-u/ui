import { createContext, useContext } from 'react';
const initialState = {
    notifications: [],
    add: () => { },
    remove: () => { },
};
export const NotificationContext = createContext(initialState);
export const useNotification = () => useContext(NotificationContext);
