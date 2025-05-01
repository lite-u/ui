import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import ButtonBase from '../button/ButtonBase';
export const IconButton = ({ xs, s, m = true, l, style = {}, type = 'button', ...props }) => {
    const { theme } = useLiteUIContext();
    const { fontSizes, formElements } = theme;
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
    const sizeStyle = formElements[size];
    const styles = {
        cursor: 'pointer',
        fontSize: fontSizes[size],
        padding: 2,
        borderRadius: sizeStyle.height,
        borderWidth: 0,
        backgroundColor: '#cfcfcf',
        color: '#ffffff',
        overflow: 'hidden',
        width: sizeStyle.height,
        height: sizeStyle.height,
        ...style,
    };
    return (_jsx(ButtonBase, { type: type, style: styles, ...props }));
};
export default IconButton;
