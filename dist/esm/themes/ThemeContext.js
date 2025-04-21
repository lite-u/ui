import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { lightTheme } from './light';
import { darkTheme } from './dark';
export const ThemeContext = createContext({
    theme: lightTheme,
    setTheme: (mode) => {
        console.log(mode);
    },
});
export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');
    useEffect(() => {
    }, []);
    // Function to change the theme
    const setTheme = (mode) => {
        setThemeMode(mode);
    };
    const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;
    return (_jsx(ThemeContext.Provider, { value: { theme: currentTheme, setTheme }, children: children }));
};
export const useTheme = () => useContext(ThemeContext);
