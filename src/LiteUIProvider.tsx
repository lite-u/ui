import {createContext, useContext, useEffect, useState} from 'react'
import {liteTheme} from './themes/lite.theme'
// import {darkTheme} from './themes/dark'
// import {ThemeType} from './themes/type'
import NotificationProvider from './components/notification/NotificationProvider'
import {ThemeType} from './themes/type'
/* eslint disable */

/**
 * List of LiteUIContext
 * @default []
 */
export const LiteUIContext = createContext<{
  theme: ThemeType
  setTheme: (mode: 'lite') => void
}>({
  theme: liteTheme,
  setTheme: () => { },
})

const LiteUIProvider = ({children}: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<'lite'>('lite')

  useEffect(() => {

  }, [])

  // Function to change the theme
  const setTheme = (mode: 'lite') => {
    setThemeMode(mode)
  }

  const currentTheme: ThemeType = themeMode === 'lite' ? liteTheme : liteTheme

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