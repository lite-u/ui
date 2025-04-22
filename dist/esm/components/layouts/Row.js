import { jsx as _jsx } from "react/jsx-runtime";
const Row = ({ children, fw = true, fh = false, style = {}, ...props }) => {
    return _jsx("div", { style: {
            width: fw ? '100%' : 'auto',
            height: fh ? '100%' : 'auto',
            ...style,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
        }, ...props, children: children });
};
export default Row;
