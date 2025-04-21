import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
import { lightTheme } from './light';
import { darkTheme } from './dark';
const ThemeContext = createContext(lightTheme);
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const value = theme === 'light' ? lightTheme : darkTheme;
    return (_jsx(ThemeContext.Provider, { value: value, children: _jsx("div", { "data-theme": theme, children: children }) }));
};
export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
