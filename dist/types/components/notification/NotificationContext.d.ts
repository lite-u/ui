/// <reference types="react" />
export interface NotificationProps {
    id: string;
    text: string;
    type: 'info' | 'warn' | 'error';
    anim: boolean;
    timer: number;
}
interface NotificationContextType {
    notifications: NotificationProps[];
    add: (text: string, type?: 'info' | 'error' | 'warn', delay?: number) => void;
    remove: (id: string) => void;
}
export declare const NotificationContext: import("react").Context<NotificationContextType>;
export declare const useNotification: () => NotificationContextType;
export {};
