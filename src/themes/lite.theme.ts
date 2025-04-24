/*

export const liteTheme: ThemeType = {
  bg: '#ffffff',
  text: '#111111',
  primary: '#0750a8',
  secondary: '#4f46e5',
  neutral: '#575757',
  warning: '#ffc107',
  error: '#ffc107',
  /!*
    form: {
      input: string
      button: string
    }*!/
  padding: {
    xs: {x: 1, y: 2},
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
}*/
const primaryColor = '#0a2e71'

export const liteTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    warn: '#ffc107',
    error: '#dc3545',
    neutralLight: '#f8f9fa',
    neutralDark: '#343a40',
    neutralGray: '#6c757d',
    neutralBorder: '#ccc',
    backgroundLight: '#ffffff',
    backgroundDark: '#212529',
    textPrimary: '#212529',
    textSecondary: '#6c757d',
    textError: '#dc3545',
    textSuccess: '#28a745',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
  },
  padding: {
    xs: {x: 8, y: 4},
    sm: {x: 10, y: 5},
    md: {x: 12, y: 6},
    lg: {x: 14, y: 7},
  },
  borderRadius: {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
  },
  button: {
    primary: {
      backgroundColor: '#0a2e71',
      color: 'white',
      borderColor: '#007bff',
    },
    warn: {
      backgroundColor: '#e4c738',
      color: 'white',
      borderColor: '#ffc107',
    },
    error: {
      backgroundColor: '#cf3333',
      color: 'white',
      borderColor: '#dc3545',
    },
    neutral: {
      backgroundColor: '#cfcfcf',
      color: '#000000',
      borderColor: '#ccc',
    },
  },
  input: {
    primary: {
      backgroundColor: '#ffffff',
      border: '1px solid #007bff',
      color: '#007bff',
      borderRadius: '6px',
    },
    warn: {
      backgroundColor: '#fff8e1',
      border: '1px solid #ffc107',
      color: '#ffc107',
      borderRadius: '6px',
    },
    error: {
      backgroundColor: '#fff0f0',
      border: '1px solid #dc3545',
      color: '#dc3545',
      borderRadius: '6px',
    },
    neutral: {
      backgroundColor: '#f8f9fa',
      border: '1px solid #ccc',
      color: '#212529',
      borderRadius: '6px',
    },
  },
  menu: {
    gat: 8,
  },
  menuItem: {
    backgroundColor: '#e4e4e4',
  },
  title: {
    h1: 32,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,
    h6: 16,
    backgroundColor: '#fff',
  },
  panel: {
    primaryColor,

  },
}