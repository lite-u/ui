import { jsx as _jsx } from "react/jsx-runtime";
const Col = ({ children, fw = false, fh = true, around = false, w = 'auto', h = 'auto', style = {}, ...props }) => {
    return _jsx("div", { style: {
            width: fw ? '100%' : w,
            height: fh ? '100%' : h,
            ...style,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: around ? 'space-around' : 'start',
        }, ...props, children: children });
};
export default Col;
