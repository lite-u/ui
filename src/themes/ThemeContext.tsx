import React, {createContext, useContext, useEffect, useState} from 'react'
import {liteTheme} from './lite.theme'
import {darkTheme} from './dark'
import {ThemeType} from './type'

export const ThemeContext = createContext<{
  theme: ThemeType
  setTheme: (mode: 'lite' | 'dark') => void
}>({
  theme: liteTheme,
  setTheme: () => { },
})

const ThemeProvider = ({children}: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<'lite' | 'dark'>('lite')

  useEffect(() => {

  }, [])

  // Function to change the theme
  const setTheme = (mode: 'lite' | 'dark') => {
    setThemeMode(mode)
  }

  // @ts-ignore
  const currentTheme:ThemeType = themeMode === 'lite' ? liteTheme : darkTheme

  return (
    <ThemeContext.Provider value={{theme: currentTheme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider