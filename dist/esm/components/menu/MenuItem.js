import { jsx as _jsx } from "react/jsx-runtime";
const MenuItem = ({ _, children, ...props }) => {
    return _jsx("div", { ...props, children: children });
};
export default MenuItem;
