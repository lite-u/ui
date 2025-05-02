import { jsx as _jsx } from "react/jsx-runtime";
import { Children, useState } from 'react';
import { useTableContext } from './Table';
/**
 * TableRow component
 *
 * @brief
 * Represents a table row for use within the Table component.
 *
 * @intro
 * Renders a styled `<tr>` element with automatically applied context-based row and cell styling.
 *
 * Can optionally render as a header row using the `head` prop.
 *
 * TableRow with `head` prop: recognized as a `thead` row
 *
 * TableRow without `head` prop: recognized as a `tbody` row
 *
 * TableRow doesn’t require `td`(or `th`) — its children are automatically wrapped in <td>(or `th`) tags.
 *
 * @example
 * import { Table, TableRow } from '@lite-u/ui'
 *
 * const TableComp = () => {
 *   return <Table>
 *       <TableRow head>
 *         <h1>th cell 0</h1>
 *         <h2>th cell 1</h2>
 *       </TableRow>
 *       <TableRow>
 *         <div>td cell 0</div>
 *         <p>td cell 1</p>
 *       </TableRow>
 *   </Table>
 * }
 */
const TableRow = ({ children, head = false, style = {}, onMouseEnter, onMouseLeave, ...props }) => {
    const [bodyRowHoverStyle, setBodyRowHoverStyle] = useState({});
    const { storedRowHoveredStyle, storedRowStyle, storedCellStyle } = useTableContext();
    const handleMouseEnter = () => {
        if (!head) {
            setBodyRowHoverStyle(storedRowHoveredStyle);
        }
    };
    const handleMouseLeave = () => {
        setBodyRowHoverStyle({});
    };
    // console.log(theme.)
    // const filteredChildren: ReactNode[] = []
    let filteredChildren = [];
    Children.forEach(children, (child) => {
        // @ts-ignore
        if (child.type) {
            filteredChildren.push(child);
        }
    });
    const rowStyle = {
        ...storedRowStyle,
    };
    const cellStyle = {
        // padding: '6px 10px',
        // border: '1px solid #b5b5b5',
        ...storedCellStyle,
    };
    const cellDivStyle = {
        width: '100%',
        height: '100%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return _jsx("tr", { onMouseEnter: (e) => {
            handleMouseEnter();
            onMouseEnter && onMouseEnter(e);
        }, onMouseLeave: (e) => {
            handleMouseLeave();
            onMouseLeave && onMouseLeave(e);
        }, style: {
            textAlign: 'center',
            // height: 40,
            ...rowStyle,
            ...style,
            ...bodyRowHoverStyle,
        }, ...props, children: filteredChildren?.map((child, index) => {
            return head ?
                _jsx("th", { style: cellStyle, children: _jsx("div", { style: cellDivStyle, children: child }) }, index) :
                _jsx("td", { style: cellStyle, children: _jsx("div", { style: cellDivStyle, children: child }) }, index);
        }) });
};
export default TableRow;
