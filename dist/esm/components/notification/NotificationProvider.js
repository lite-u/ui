import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useRef, useState } from 'react';
import Transition from '../transition/Transition';
import Container from '../container/Container';
import { useLiteUIContext } from '../../LiteUIProvider';
import { createPortal } from 'react-dom';
export const NotificationContext = createContext({
    notifications: [],
    add: () => '',
    remove: () => { },
});
/**
 * NotificationProvider component
 *
 * @brief
 * Provides notification context and renders toasts with animation and auto-dismiss(optional) behavior.
 *
 * @intro
 * Wraps an application with a notification system. Allows components to trigger toast messages
 * with customizable content, type, and duration. Renders floating notifications using portals
 * with enter/exit animations, and removes them after a timeout(optional).
 *
 * @example
 * import { useNotification } from '@lite-u/ui'
 *
 * const NotificationSampleSimple: React.FC = () => {
 *    const {add} = useNotification()
 *
 *    return <div onClick={()=>add('hello')}></div>
 * }
 */
const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const notificationsRef = useRef(new Map());
    const animationExitDuration = 150;
    const { theme } = useLiteUIContext();
    const updateNotifications = () => {
        const arr = Array.from(notificationsRef.current.values());
        setNotifications(arr);
    };
    const addNotification = (comp, type = 'info', delay = 2000) => {
        const id = type + '-' + Date.now();
        const n = {
            id,
            type,
            comp,
            anim: false,
            timer: NaN,
        };
        notificationsRef.current.set(id, n);
        // handle animation enter
        setTimeout(() => {
            const n = notificationsRef.current.get(id);
            if (n) {
                n.anim = true;
                updateNotifications();
            }
        }, 0);
        if (typeof delay === 'number') {
            n.timer = window.setTimeout(() => {
                removeNotification(id);
            }, delay);
        }
        // handle animation exit
        updateNotifications();
        return id;
    };
    const removeNotification = (id) => {
        const n = notificationsRef.current.get(id);
        if (n) {
            n.anim = false;
            updateNotifications();
            n.timer = window.setTimeout(() => {
                notificationsRef.current.delete(id);
                updateNotifications();
            }, animationExitDuration);
        }
        return false;
    };
    return _jsxs(NotificationContext.Provider, { value: {
            notifications,
            add: addNotification,
            remove: removeNotification,
        }, children: [children, createPortal(notifications.map(({ id, comp, type, anim }, index) => {
                let color = '#666';
                if (type === 'error') {
                    color = theme.colors.error;
                }
                if (type === 'warn') {
                    color = theme.colors.warn;
                }
                if (type === 'suc') {
                    color = theme.colors.success;
                }
                return _jsx("div", { role: 'notification', style: {
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1000 + index,
                    }, children: _jsx(Transition, { visible: anim, from: {
                            scale: 0,
                        }, to: {
                            scale: 1,
                        }, leaveDuration: animationExitDuration, style: { overflow: 'visible' }, children: _jsx(Container, { style: {
                                background: '#fff',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius: 5,
                                fontSize: theme.fontSizes.sm,
                                boxShadow: color + ' 0 0 3px 0',
                                color,
                            }, children: comp }) }) }, id);
            }), document.body)] });
};
export const useNotification = () => useContext(NotificationContext);
export default NotificationProvider;
