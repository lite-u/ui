import { jsx as _jsx } from "react/jsx-runtime";
const MenuItem = ({ _, children, ...props }) => {
    return _jsx("div", { style: {
            height: 30,
            padding: 8,
            fontSize: 16,
        }, ...props, children: children });
};
export default MenuItem;
