export interface ThemeType {
  bg: string
  text: string,
  primary: '#4f46e5',
  secondary: '#4f46e5',
  warning: '#ffc107',
  error: '#ffc107',
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