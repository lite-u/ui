import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const Select = ({ label, children, ...props }) => {
    const [openSelect, setOpenSelect] = useState(false);
    const [selectFocused, setSelectFocused] = useState(false);
    let styles = {
        border: '1px solid #dfdfdf',
    };
    return _jsxs("div", { ...props, children: [label && _jsx("label", { children: label }), _jsx("div", { onFocus: () => setSelectFocused(true), onBlur: () => setSelectFocused(false), children: children }), openSelect &&
                _jsx("div", { children: children })] });
};
export default Select;
