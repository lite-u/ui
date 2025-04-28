import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import { useState } from 'react';
export const IconButton = ({ xs, s, m = true, l, style = {}, type = 'button', ...props }) => {
    const { theme } = useLiteUIContext();
    const [opacity, setOpacity] = useState(1);
    const { fontSizes,
    // button,
    // borderRadius,
     } = theme;
    const getSize = () => {
        if (xs)
            return 'xs';
        if (s)
            return 'sm';
        if (l)
            return 'lg';
        return 'md';
    };
    const size = getSize();
    const sizeStyles = {
        xs: {
            width: 20,
            height: 20,
        },
        sm: {
            width: 25,
            height: 25,
        },
        md: {
            width: 30,
            height: 30,
        },
        lg: {
            width: 40,
            height: 40,
        },
    };
    const sizeStyle = sizeStyles[size];
    const styles = {
        opacity,
        cursor: 'pointer',
        fontSize: fontSizes[size],
        padding: 2,
        borderRadius: sizeStyle.width,
        borderWidth: 0,
        backgroundColor: '#cfcfcf',
        color: '#ffffff',
        overflow: 'hidden',
        ...sizeStyle,
        ...style,
    };
    return (_jsx("button", { type: type, style: styles, onMouseOver: () => setOpacity(0.8), onMouseOut: () => setOpacity(1), ...props }));
};
export default IconButton;
