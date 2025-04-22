import React, {createContext, useContext, useEffect, useState} from 'react'
import {lightTheme} from './light'
import {darkTheme} from './dark'
import {ThemeType} from './type'

export const ThemeContext = createContext<{
  theme: ThemeType
  setTheme: (mode: never) => void
}>({
  theme: lightTheme,
  setTheme: (mode: 'light' | 'dark'): void => {
    console.log(mode)
  },
})

const ThemeProvider = ({children}: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {

  }, [])

  // Function to change the theme
  const setTheme = (mode: 'light' | 'dark') => {
    setThemeMode(mode)
  }

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{theme: currentTheme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider