export interface ThemeType {
  bg: string
  text: string,
  primary: string
  secondary: string
  warning: string
  error: string
  form: {
    input: string
    button: string
  }
  borderRadius: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
  },
  padding: {
    sm: { x: number, y: number },
    md: { x: number, y: number },
    lg: { x: number, y: number },
  }
  fontSizes: {
    xs: number
    sm: number
    md: number
    lg: number
  }
}