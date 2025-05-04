export interface NotificationProps {
    id: string;
    comp: React.ReactNode;
    type: 'info' | 'warn' | 'error';
    anim: boolean;
    timer: number;
}
interface NotificationContextType {
    notifications: NotificationProps[];
    add: (comp: React.ReactNode, type?: 'info' | 'error' | 'warn', delay?: number | false) => string;
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
export declare const useNotification: () => NotificationContextType;
export {};
