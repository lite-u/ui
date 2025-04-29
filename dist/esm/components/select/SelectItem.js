import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import SelectContext from './SelectContext';
const SelectItem = ({ label, value, children, ...props }) => {
    const context = useContext(SelectContext);
    if (!context)
        return null;
    const { itemClick } = context;
    return (_jsx("div", { tabIndex: 0, onClick: () => itemClick(value), ...props, children: children }));
};
export default SelectItem;
