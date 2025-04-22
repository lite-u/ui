import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SelectItem = ({ type, label, ...props }) => {
    let styles = {
        border: '1px solid #dfdfdf',
    };
    return _jsxs("div", { ...props, children: [label && _jsx("label", { children: label }), _jsx("option", { value: "1", children: "1" })] });
    return _jsx("input", { type: type });
};
export default SelectItem;
