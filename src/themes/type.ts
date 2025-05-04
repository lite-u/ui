export type ThemeType = {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warn: string;
    error: string;
  };
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  padding: {
    xs: { x: number; y: number };
    sm: { x: number; y: number };
    md: { x: number; y: number };
    lg: { x: number; y: number };
  };
  borderRadius: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  formElements: {
    xs: { minWidth: number; height: number };
    sm: { minWidth: number; height: number };
    md: { minWidth: number; height: number };
    lg: { minWidth: number; height: number };
  };
  button: {
    primary: {
      backgroundColor: string;
      color: string;
      border: string;
    };
    warn: {
      backgroundColor: string;
      color: string;
      border: string;
    };
    error: {
      backgroundColor: string;
      color: string;
      border: string;
    };
    neutral: {
      backgroundColor: string;
      color: string;
      border: string;
    };
    disabled: {
      backgroundColor: string;
      color: string;
      border: string;
    };

  };
  input: {
    primary: {
      backgroundColor: string;
      border: string;
      color: string;
      outline: string;
    };
    warn: {
      backgroundColor: string;
      border: string;
      color: string;
      outline: string;
    };
    error: {
      backgroundColor: string;
      border: string;
      color: string;
      outline: string;
    };
    neutral: {
      backgroundColor: string;
      border: string;
      color: string;
      outline: string;
    };
  };
  menu: {
    gap: number;
  };
  menuItem: {
    backgroundColor: string;
  };
  title: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
    backgroundColor: string;
  };
  panel: {
    primaryColor: string;
  }
  table: {
    row: {
      xs: { height: number },
      sm: { height: number },
      md: { height: number },
      lg: { height: number },
    },
  },
};
