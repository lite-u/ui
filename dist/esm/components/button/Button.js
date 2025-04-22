import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
import { useState } from 'react';
const Button = ({ xs, s, m = true, l, type, style = {}, ...props }) => {
    const { theme } = useTheme();
    const { fontSizes, primary, warn, error } = theme;
    const [opacity, setOpacity] = useState(1);
    let buttonDefaultStyle = {
        cursor: 'pointer',
        backgroundColor: primary,
        color: 'white',
        border: `1px solid ${primary}`,
        // alignSelf: 'center',
    };
    if (xs) {
        Object.assign(buttonDefaultStyle, {
            minWidth: 40,
            height: 20,
            fontSize: fontSizes.xs,
            borderRadius: theme.borderRadius.xs,
        });
    }
    else if (s) {
        Object.assign(buttonDefaultStyle, {
            minWidth: 50,
            height: 25,
            fontSize: fontSizes.sm,
            borderRadius: theme.borderRadius.sm,
        });
    }
    else if (l) {
        Object.assign(buttonDefaultStyle, {
            minWidth: 80,
            height: 40,
            fontSize: fontSizes.lg,
            borderRadius: theme.borderRadius.lg,
        });
    }
    else if (m) {
        Object.assign(buttonDefaultStyle, {
            minWidth: 60,
            height: 30,
            fontSize: fontSizes.md,
            borderRadius: theme.borderRadius.md,
        });
    }
    Object.assign(buttonDefaultStyle, style);
    buttonDefaultStyle.opacity = opacity;
    return _jsx("button", { type: type, style: buttonDefaultStyle, ...props, onMouseOver: () => {
            setOpacity(.8);
        }, onMouseOut: () => {
            setOpacity(1);
        } });
};
export default Button;
