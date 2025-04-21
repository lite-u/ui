import React, {createContext, useContext, useState} from 'react'
import {lightTheme} from './light'
import {darkTheme} from './dark'

const ThemeContext = createContext(lightTheme)

const ThemeProvider = ({children}: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const value = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider