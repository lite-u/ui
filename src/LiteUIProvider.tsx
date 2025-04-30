import React, {createContext, useContext, useEffect, useState} from 'react'
import {liteTheme} from './themes/lite.theme'
import {darkTheme} from './themes/dark'
import {ThemeType} from './themes/type'
import NotificationProvider from './components/notification/NotificationProvider'
/* eslint disable */
export const LiteUIContext = createContext<{
  theme: ThemeType
  setTheme: (mode: 'lite' | 'dark') => void
}>({
  theme: liteTheme,
  setTheme: () => { },
})

const LiteUIProvider = ({children}: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<'lite' | 'dark'>('lite')

  useEffect(() => {

  }, [])

  // Function to change the theme
  const setTheme = (mode: 'lite' | 'dark') => {
    setThemeMode(mode)
  }

  // @ts-ignore
  const currentTheme: ThemeType = themeMode === 'lite' ? liteTheme : darkTheme

  return (
    <LiteUIContext.Provider value={{theme: currentTheme, setTheme}}>
      <NotificationProvider>
        {children}
      </NotificationProvider>
    </LiteUIContext.Provider>
  )
}

export const useLiteUIContext = () => useContext(LiteUIContext)

export default LiteUIProvider