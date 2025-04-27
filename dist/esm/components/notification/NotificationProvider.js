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
    const addNotification = (text, type = 'info', delay = 2000) => {
        const id = type + '-' + Date.now();
        const n = {
            id,
            type,
            text,
            timer: NaN,
        };
        n.timer = setTimeout(() => {
            // console.log(9)
            removeNotification(id);
        }, delay);
        notificationsRef.current.set(id, n);
        updateNotifications();
    };
    const removeNotification = (id) => {
        const n = notificationsRef.current.get(id);
        // console.log(n)
        if (n) {
            clearTimeout(n.timer);
            notificationsRef.current.delete(id);
            updateNotifications();
            return true;
        }
        return false;
    };
    const basicStyles = {
        position: 'fixed',
        background: '#fff',
        padding: 10,
        maxWidth: 200,
        borderRadius: 5,
        border: '1px solid #000',
        // boxShadow: '0 0 3px 0 #000',
        top: '50%',
        left: '50%',
        transition: 'transform .5s',
        transform: 'translate(-50%, -50%)',
    };
    console.log([...notifications]);
    return (_jsxs(NotificationContext.Provider, { value: {
            notifications,
            add: addNotification,
            remove: removeNotification,
        }, children: [children, notifications.map(({ id, text, type }, index) => {
                let color = '#000';
                if (type === 'error') {
                    color = 'red';
                }
                if (type === 'warn') {
                    color = 'yellow';
                }
                return _jsx(Row, { jc: true, center: true, style: {
                        ...basicStyles,
                        borderColor: color,
                        color,
                        // zIndex: 1000 + index,
                    }, children: text }, id);
            })] }));
};
export default NotificationProvider;
