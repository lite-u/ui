import { jsx as _jsx } from "react/jsx-runtime";
import TableBase from './TableBase';
import { Children, createContext, useContext } from 'react';
import TableRow from './TableRow';
const TableContext = createContext({
    storedRowStyle: {},
    storedCellStyle: {},
});
/**
 * Table Component
 * Accept
 * @default false
 */
const Table = ({ children = [], fw = false, fh = true, fixed = false, style = {}, rowStyle = {}, cellStyle = {}, ...props }) => {
    const filteredChildren = [];
    Children.forEach(children, (child) => {
        if (child.type !== TableRow) {
            console.error(`<Table> only accepts <TableRow> as children. Found: <${child.type}>`);
            return;
        }
        filteredChildren.push(child);
    });
    return _jsx(TableContext.Provider, { value: {
            // borderStyle,
            storedRowStyle: rowStyle,
            storedCellStyle: cellStyle,
        }, children: _jsx(TableBase, { style: {
                width: fw ? '100%' : 'auto',
                height: fh ? '100%' : 'auto',
                borderCollapse: 'collapse',
                tableLayout: fixed ? 'fixed' : 'auto',
                ...style,
            }, ...props, children: filteredChildren }) });
};
export const useTableContext = () => useContext(TableContext);
export default Table;
