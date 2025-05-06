const primaryColor = '#133f90';
const secondaryColor = '#007bff';
const successColor = '#28a745';
const errorColor = '#dc3545';
const warningColor = '#fb9e08';
export const liteTheme = {
    colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        success: successColor,
        warn: warningColor,
        error: errorColor,
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
    },
    padding: {
        xs: { x: 8, y: 4 },
        sm: { x: 10, y: 5 },
        md: { x: 12, y: 6 },
        lg: { x: 14, y: 7 },
    },
    borderRadius: {
        xs: 2,
        sm: 3,
        md: 4,
        lg: 5,
    },
    formElements: {
        xs: {
            minWidth: 30,
            height: 20,
        },
        sm: {
            minWidth: 40,
            height: 25,
        },
        md: {
            minWidth: 50,
            height: 30,
        },
        lg: {
            minWidth: 60,
            height: 40,
        },
    },
    button: {
        primary: {
            backgroundColor: primaryColor,
            color: 'white',
            border: 'none',
        },
        warn: {
            backgroundColor: warningColor,
            color: 'white',
            border: 'none',
        },
        error: {
            backgroundColor: errorColor,
            color: 'white',
            border: 'none',
        },
        neutral: {
            backgroundColor: 'transparent',
            color: '#333',
            border: `1px solid ${primaryColor}`,
        },
        disabled: {
            backgroundColor: '#cfcfcf',
            color: '#e1e1e1',
            border: 'none',
        },
    },
    input: {
        primary: {
            backgroundColor: '#ffffff',
            border: '1px solid #007bff',
            color: '#007bff',
            outline: 'none',
        },
        warn: {
            backgroundColor: '#fff8e1',
            border: '1px solid #ffc107',
            color: '#ffc107',
            // borderRadius: 6,
            outline: 'none',
        },
        error: {
            backgroundColor: '#fff0f0',
            border: '1px solid #dc3545',
            color: errorColor,
            // borderRadius: 6,
            outline: 'none',
        },
        neutral: {
            backgroundColor: '#f8f9fa',
            border: '1px solid #ccc',
            color: '#212529',
            // borderRadius: 6,
            outline: 'none',
        },
    },
    menu: {
        gap: 8,
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
    table: {
        row: {
            xs: { height: 20 },
            sm: { height: 25 },
            md: { height: 30 },
            lg: { height: 40 },
        },
    },
};
