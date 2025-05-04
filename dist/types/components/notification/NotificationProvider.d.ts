import { FC, ReactNode } from 'react';
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
 *    const { add } = useNotification()
 *
 *    return <div onClick={()=>add('hello')}></div>
 * }
 */
declare const NotificationProvider: FC<{
    children: ReactNode;
}>;
export default NotificationProvider;
