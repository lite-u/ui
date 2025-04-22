import {ThemeType} from './type'

export const lightTheme: ThemeType = {
  bg: '#ffffff',
  text: '#111111',
  primary: '#0750a8',
  secondary: '#4f46e5',
  warning: '#ffc107',
  error: '#ffc107',
  /*
    form: {
      input: string
      button: string
    }*/
  padding: {
    sm: {x: 2, y: 4},
    md: {x: 4, y: 8},
    lg: {x: 8, y: 16},
  },
  borderRadius: {
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
  },
  fontSizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
  },
}