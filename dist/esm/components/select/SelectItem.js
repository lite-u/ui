import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SelectItem = ({ label, children, ...props }) => {
    /*  let styles: React.CSSProperties = {
        border: '1px solid #dfdfdf',
      }*/
    return _jsxs("div", { ...props, children: [label && _jsx("label", { children: label }), children] });
};
export default SelectItem;
