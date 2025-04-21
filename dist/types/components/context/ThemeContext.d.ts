import React from 'react';
declare const ThemeProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => {
    bg: string;
    text: string;
    primary: string;
};
export default ThemeProvider;
