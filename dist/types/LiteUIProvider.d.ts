import React from 'react';
import { ThemeType } from './themes/type';
export declare const LiteUIContext: React.Context<{
    theme: ThemeType;
    setTheme: (mode: "lite") => void;
}>;
declare const LiteUIProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useLiteUIContext: () => {
    theme: ThemeType;
    setTheme: (mode: "lite") => void;
};
export default LiteUIProvider;
