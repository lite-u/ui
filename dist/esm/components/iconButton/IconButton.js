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
    const len = sizeStyle.height;
    const styles = {
        cursor: 'pointer',
        fontSize: fontSizes[size],
        borderRadius: len,
        borderWidth: 0,
        backgroundColor: '#cfcfcf',
        color: '#ffffff',
        overflow: 'hidden',
        width: len,
        height: len,
        ...style,
    };
    return (_jsx(ButtonBase, { type: type, style: styles, ...props }));
};
export default IconButton;
