import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TableBase = ({ children, ...props }) => {
    let tHead = undefined;
    let tBody = [];
    if (Array.isArray(children)) {
        children.forEach(child => {
            if (child.props && child.props.head) {
                tHead = child;
            }
            else {
                tBody.push(child);
            }
        });
    }
    else {
        tHead = children;
    }
    return _jsxs("table", { ...props, children: [_jsx("thead", { children: tHead }), _jsx("tbody", { children: tBody })] });
};
export default TableBase;
