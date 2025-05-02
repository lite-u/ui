import { ReactNode } from 'react';
export type TableRowProps = React.FC<React.HTMLProps<HTMLTableRowElement> & {
    children: ReactNode;
    /**
     * If true, renders the row using <th> elements instead of <td>, and wrap into <thead>.
     * @default false
     */
    head?: boolean;
    style?: {};
}>;
/**
 * TableRow component
 *
 * @brief Represents a table row for use within the Table component.
 *
 * @intro Renders a styled < tr > element with automatically applied context-based row and cell styling. Can optionally render as a header row using the `head` prop.
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
declare const TableRow: TableRowProps;
export default TableRow;
