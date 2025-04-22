export interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warn: string;
    error: string;
    neutralLight: string;
    neutralDark: string;
    neutralGray: string;
    neutralBorder: string;
    backgroundLight: string;
    backgroundDark: string;
    textPrimary: string;
    textSecondary: string;
    textError: string;
    textSuccess: string;
  };
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  padding: {
    xs: { x: number; y: number };
    sm: { x: number; y: number };
    md: { x: number; y: number };
    lg: { x: number; y: number };
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  buttonStyles: {
    primary: {
      backgroundColor: string;
      color: string;
      border: string;
      borderRadius: string;
    };
    warn: {
      backgroundColor: string;
      color: string;
      border: string;
      borderRadius: string;
    };
    error: {
      backgroundColor: string;
      color: string;
      border: string;
      borderRadius: string;
    };
    neutral: {
      backgroundColor: string;
      color: string;
      border: string;
      borderRadius: string;
    };
  };
  inputStyles: {
    primary: {
      backgroundColor: string;
      border: string;
      color: string;
      borderRadius: string;
    };
    warn: {
      backgroundColor: string;
      border: string;
      color: string;
      borderRadius: string;
    };
    error: {
      backgroundColor: string;
      border: string;
      color: string;
      borderRadius: string;
    };
    neutral: {
      backgroundColor: string;
      border: string;
      color: string;
      borderRadius: string;
    };
  };
}