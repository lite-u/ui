import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Select = ({ type, label, ...props }) => {
    let styles = {
        border: '1px solid #dfdfdf',
    };
    return _jsxs("div", { ...props, children: [label && _jsx("label", { children: label }), _jsx("select", { name: "", id: "" })] });
    return _jsx("input", { type: type });
};
export default Select;
