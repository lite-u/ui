import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useTableContext } from './Table';
const TableRow = ({ children, head = false, style = {}, onMouseEnter, onMouseLeave, ...props }) => {
    const [extraRowStyle, setExtraRowStyle] = useState({});
    const { storedRowStyle, storedCellStyle } = useTableContext();
    const handleMouseEnter = () => {
        if (!head) {
            setExtraRowStyle({
                backgroundColor: '#dfdfdf',
                // color: '#fff',
            });
        }
    };
    const handleMouseLeave = () => {
        setExtraRowStyle({});
    };
    let nodes = [];
    if (Array.isArray(children)) {
        nodes = children;
    }
    else {
        nodes.push(children);
    }
    const rowStyle = {
        borderBottom: '1px solid #b5b5b5',
        color: '#292929',
        ...storedRowStyle,
        ...extraRowStyle,
    };
    const cellStyle = {
        padding: '10px 0',
        // border: '1px solid #b5b5b5',
        ...storedCellStyle,
    };
    const cellDivStyle = {
        display: 'flex',
        justifyContent: 'center',
    };
    return _jsx("tr", { onMouseEnter: (e) => {
            handleMouseEnter();
            onMouseEnter && onMouseEnter(e);
        }, onMouseLeave: (e) => {
            handleMouseLeave();
            onMouseLeave && onMouseLeave(e);
        }, style: {
            textAlign: 'center',
            height: 40,
            ...rowStyle,
            ...style,
        }, ...props, children: nodes?.map((child, index) => {
            return head ?
                _jsx("th", { style: cellStyle, children: _jsx("div", { style: cellDivStyle, children: child }) }, index) :
                _jsx("td", { style: cellStyle, children: _jsx("div", { style: cellDivStyle, children: child }) }, index);
        }) });
};
export default TableRow;
