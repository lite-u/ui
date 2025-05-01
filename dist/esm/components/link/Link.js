import { jsx as _jsx } from "react/jsx-runtime";
import Interactable from '../interactive/Interactable';
import { useLiteUIContext } from '../../LiteUIProvider';
const Link = ({ children, fw = true, fh = true, style = {}, ...props }) => {
    const { theme } = useLiteUIContext();
    return _jsx(Interactable, { tag: 'a', hover: {
            color: theme.colors.secondary,
        }, style: {
            color: '#000',
            cursor: 'pointer',
            width: fw ? '100%' : 'auto',
            height: fh ? '100%' : 'auto',
            ...style,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        }, ...props, children: children });
};
export default Link;
