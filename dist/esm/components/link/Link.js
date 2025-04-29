import { jsx as _jsx } from "react/jsx-runtime";
const Link = ({ children, fw = false, fh = true, style = {}, ...props }) => {
    return _jsx("a", { style: {
            width: fw ? '100%' : 'auto',
            height: fh ? '100%' : 'auto',
            ...style,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        }, ...props, children: children });
};
export default Link;
