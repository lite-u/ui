import React from 'react';
import { ThemeType } from './themes/type';
export declare const LiteUIContext: React.Context<{
    theme: ThemeType;
    setTheme: (mode: 'lite' | 'dark') => void;
}>;
declare const LiteUIProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => {
    theme: ThemeType;
    setTheme: (mode: 'lite' | 'dark') => void;
};
export default LiteUIProvider;
