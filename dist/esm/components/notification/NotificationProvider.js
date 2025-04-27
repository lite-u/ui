import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Row } from '../../index';
import { NotificationContext } from './NotificationContext';
const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const notificationsRef = useRef(new Map());
    useEffect(() => {
    }, []);
    const updateNotifications = () => {
        const arr = Array.from(notificationsRef.current.values());
        setNotifications(arr);
    };
    const addNotification = (text, type = 'info', delay = 3000) => {
        const id = type + '-' + Date.now();
        const n = {
            id,
            type,
            text,
            timer: NaN,
        };
        n.timer = setTimeout(() => {
            removeNotification(id);
        }, delay);
        notificationsRef.current.set(id, n);
        updateNotifications();
    };
    const removeNotification = (id) => {
        const n = notificationsRef.current.get(id);
        if (n) {
            clearTimeout(n.timer);
            notificationsRef.current.delete(id);
            updateNotifications();
            return true;
        }
        return false;
    };
    // console.log(notifications.length)
    return (_jsxs(NotificationContext.Provider, { value: {
            notifications,
            add: addNotification,
            remove: removeNotification,
        }, children: [children, notifications.map((notification) => {
                return _jsx(Row, { jc: true, center: true, style: {
                        position: 'fixed',
                        background: '#fff',
                        padding: 10,
                        maxWidth: 200,
                        borderRadius: 5,
                        boxShadow: '0 0 3px 0 #000',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }, children: notification.text });
            })] }));
};
export default NotificationProvider;
