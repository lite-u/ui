import { FC, ReactNode } from 'react';
interface NotificationItemProps {
    id: string;
    comp: ReactNode;
    type: 'info' | 'suc' | 'warn' | 'error';
    anim: boolean;
    timer: number;
}
interface NotificationContextType {
    notifications: NotificationItemProps[];
    add: (comp: ReactNode, type?: NotificationItemProps['type'], delay?: number | false) => string;
    remove: (id: string) => void;
}
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
export declare const NotificationContext: import("react").Context<NotificationContextType>;
/**
 * NotificationProvider component
 *
 * @brief
 * Provides notification context and renders toasts with animation and auto-dismiss(optional) behavior.
 *
 * @intro
 * Wraps an application with a notification system. Allows components to trigger toast messages
 * with customizable content, type, and duration. Renders floating notifications using portals
 * with enter/exit animations, and removes them after a timeout.
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
declare const NotificationProvider: FC<{
    children: ReactNode;
}>;
export declare const useNotification: () => NotificationContextType;
export default NotificationProvider;
