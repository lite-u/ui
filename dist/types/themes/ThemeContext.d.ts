import React from 'react';
export declare const ThemeContext: React.Context<{
    theme: ThemeType;
    setTheme: (mode: never) => void;
}>;
declare const ThemeProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => {
    theme: ThemeType;
    setTheme: (mode: never) => void;
};
export default ThemeProvider;
