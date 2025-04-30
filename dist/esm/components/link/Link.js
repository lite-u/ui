import { jsx as _jsx } from "react/jsx-runtime";
import Hoverable from '../hover/Hoverable';
const Link = ({ children, fw = true, fh = true, style = {}, ...props }) => {
    return _jsx(Hoverable, { tag: 'a', activeStyle: {
            color: 'blue',
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
