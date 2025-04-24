import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import SelectContext from './SelectContext';
const SelectItem = ({ label, value, children, ...props }) => {
    const context = useContext(SelectContext);
    if (!context)
        return null;
    const { setValue } = context;
    return (_jsx("div", { onClick: () => setValue(value), ...props, children: children }));
};
export default SelectItem;
