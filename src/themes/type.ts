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
    xs: number
    sm: number
    md: number
    lg: number
  }
  padding: {
    xs: { x: number; y: number };
    sm: { x: number; y: number };
    md: { x: number; y: number };
    lg: { x: number; y: number };
  }
  borderRadius: {
    xs: number
    sm: number
    md: number
    lg: number
  };
  button: {
    primary: {
      backgroundColor: string
      color: string
      borderColor: string

    };
    warn: {
      backgroundColor: string
      color: string
      borderColor: string
    };
    error: {
      backgroundColor: string
      color: string
      borderColor: string
    };
    neutral: {
      backgroundColor: string
      color: string
      borderColor: string
    };
  }
  input: {
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
  }
  menuItem: { backgroundColor: string }
  title: {
    h1: number
    h2: number
    h3: number
    h4: number
    h5: number
    h6: number
    backgroundColor: string
  }
  panel: {
    primaryColor: string
/*    head?: {
      backgroundColor: string
    }*/
  }
}