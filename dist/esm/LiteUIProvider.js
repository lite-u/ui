import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { liteTheme } from './themes/lite.theme';
// import {darkTheme} from './themes/dark'
// import {ThemeType} from './themes/type'
import NotificationProvider from './components/notification/NotificationProvider';
/* eslint disable */
/**
 * List of LiteUIContext
 * @default []
 */
export const LiteUIContext = createContext({
    theme: liteTheme,
    setTheme: () => { },
});
const LiteUIProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('lite');
    useEffect(() => {
    }, []);
    // Function to change the theme
    const setTheme = (mode) => {
        setThemeMode(mode);
    };
    const currentTheme = themeMode === 'lite' ? liteTheme : liteTheme;
    return (_jsx(LiteUIContext.Provider, { value: { theme: currentTheme, setTheme }, children: _jsx(NotificationProvider, { children: children }) }));
};
export const useLiteUIContext = () => useContext(LiteUIContext);
export default LiteUIProvider;
