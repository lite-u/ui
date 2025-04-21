import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext(lightTheme);
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const value = theme === 'light' ? lightTheme : darkTheme;
    return (_jsx(ThemeContext.Provider, { value: value, children: _jsx("div", { "data-theme": theme, children: children }) }));
};
export const useTheme = () => useContext(ThemeContext);
