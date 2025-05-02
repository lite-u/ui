import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import SelectContext from './SelectContext';
import Interactable from '../interactive/Interactable';
/**
 * SelectItem component
 *
 * @brief
 * An individual selectable item used within the Select dropdown.
 *
 * @intro
 * Displays a styled item that responds to click and keyboard interactions. Automatically highlights when selected.
 * Must be used inside a `Select` component to inherit context.
 *
 * @example
 * import { Select, SelectItem } from '@lite-u/ui'
 *
 * <Select>
 *   <SelectItem value="1">Option 1</SelectItem>
 *   <SelectItem value="2">Option 2</SelectItem>
 * </Select>
 */
const SelectItem = ({ label, value, children, onClick, onKeyDown, style = {}, ...props }) => {
    const context = useContext(SelectContext);
    if (!context)
        return null;
    const bgStyle = {};
    const { itemClick, selectValue, itemStyle } = context;
    if (selectValue === value) {
        bgStyle.backgroundColor = '#dfdfdf';
    }
    const styles = {
        ...itemStyle,
        // boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        ...bgStyle,
        ...style,
    };
    return (_jsx(Interactable, { role: 'select-item', tag: 'div', tabIndex: 0, style: styles, hover: {
            backgroundColor: '#dfdfdf',
        }, onKeyDown: (e) => {
            const key = e.code.toLowerCase();
            if (key === 'space' || key === 'enter') {
                e.preventDefault();
                itemClick(value);
            }
            onKeyDown && onKeyDown(e);
        }, onClick: (e) => {
            itemClick(value);
            onClick && onClick(e);
        }, ...props, children: children }));
};
export default SelectItem;
