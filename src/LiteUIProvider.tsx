import {createContext, useContext, useEffect, useState} from 'react'
import {liteTheme} from './themes/lite.theme'
import {ThemeType} from './themes/type'

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
      {children}
    </LiteUIContext.Provider>
  )
}

export const useLiteUIContext = () => useContext(LiteUIContext)

export default LiteUIProvider