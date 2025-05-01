import { jsx as _jsx } from "react/jsx-runtime";
import TableBase from './TableBase';
import { Children, createContext, useContext } from 'react';
import TableRow from './TableRow';
import { useLiteUIContext } from '../../LiteUIProvider';
const TableContext = createContext({
    storedRowStyle: {},
    storedCellStyle: {},
    storedRowHoveredStyle: {},
});
/**
 * Table
 *
 * @brief
 * A simple and easy-to-use table component with a minimal design.
 *
 * @intro
 *
 * Table accepts [TableRow](./tablerow) Component as children only
 *
 * TableRow with head prop: recognized as a thead row
 *
 * TableRow without head prop: recognized as a tbody row
 *
 * TableRow doesn’t require TableTd — its children are automatically wrapped in <td> tags.
 *
 * @example
 * <Table>
 *   <TableRow head>
 *     <span>th cell 0</span>
 *     <span>th cell 1</span>
 *   </TableRow>
 *   <TableRow>
 *     <span>td cell 0</span>
 *     <span>td cell 1</span>
 *   </TableRow>
 * </Table>
 */
const Table = ({ children = [], xs, s, m = true, l, fw = true, fh = false, fixed = false, style = {}, rowStyle = {}, rowHoverStyle = {}, cellStyle = {}, ...props }) => {
    const { theme } = useLiteUIContext();
    // console.log(theme.)
    const filteredChildren = [];
    Children.forEach(children, (child) => {
        // @ts-ignore
        if (child.type !== TableRow) {
            // @ts-ignore
            console.error(`<Table> only accepts <TableRow> as children. Found: <${child.type}>`);
            return;
        }
        filteredChildren.push(child);
    });
    const tableStyle = {
        width: fw ? '100%' : 'auto',
        height: fh ? '100%' : 'auto',
        borderCollapse: 'collapse',
        tableLayout: fixed ? 'fixed' : 'auto',
    };
    const sizedCellStyle = {};
    const sizedRowStyle = {};
    if (m) {
        tableStyle.fontSize = theme.fontSizes.md;
        sizedRowStyle.height = theme.table.row.md.height;
        sizedCellStyle.padding = `${theme.padding.md.y}px ${theme.padding.md.x}px`;
    }
    if (xs) {
        tableStyle.fontSize = theme.fontSizes.xs;
        sizedRowStyle.height = theme.table.row.xs.height;
        sizedCellStyle.padding = `${theme.padding.xs.y}px ${theme.padding.xs.x}px`;
    }
    if (s) {
        tableStyle.fontSize = theme.fontSizes.sm;
        sizedRowStyle.height = theme.table.row.sm.height;
        sizedCellStyle.padding = `${theme.padding.sm.y}px ${theme.padding.sm.x}px`;
    }
    if (l) {
        tableStyle.fontSize = theme.fontSizes.lg;
        sizedRowStyle.height = theme.table.row.lg.height;
        sizedCellStyle.padding = `${theme.padding.lg.y}px ${theme.padding.lg.x}px`;
    }
    const storedRowHoveredStyle = {
        backgroundColor: '#dfdfdf',
        ...rowHoverStyle,
    };
    const storedRowStyle = {
        borderBottom: '1px solid #b5b5b5',
        color: '#292929',
        ...sizedRowStyle,
        ...rowStyle,
    };
    const storedCellStyle = {
        ...sizedCellStyle,
        ...cellStyle,
    };
    return _jsx(TableContext.Provider, { value: {
            storedRowStyle,
            storedCellStyle,
            storedRowHoveredStyle,
        }, children: _jsx(TableBase, { style: { ...tableStyle, ...style }, ...props, children: filteredChildren }) });
};
export const useTableContext = () => useContext(TableContext);
export default Table;
