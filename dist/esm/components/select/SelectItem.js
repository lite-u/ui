import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import SelectContext from './SelectContext';
import MenuItemBase from '../menu/MenuItemBase';
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
        padding: itemStyle.padding,
        height: itemStyle.height,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        ...bgStyle,
        ...style,
    };
    // if (selectValue === value) {
    //   styles.backgroundColor = '#dfdfdf'
    // }
    return (_jsx(MenuItemBase, { tabIndex: 0, style: styles, onKeyDown: (e) => {
            if (e.code.toLowerCase() === 'space') {
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
