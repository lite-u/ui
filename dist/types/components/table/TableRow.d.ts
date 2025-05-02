import { ReactNode } from 'react';
export type TableRowProps = React.FC<React.HTMLProps<HTMLTableRowElement> & {
    children: ReactNode;
    /**
     * If true, renders the row using `<th>` elements instead of `<td>`, and wrap into `<thead>` rather than `<tbody>`.
     * @default false
     */
    head?: boolean;
    style?: {};
}>;
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
 * <Table>
 *     <TableRow head>
 *       <h1>th cell 0</h1>
 *       <h2>th cell 1</h2>
 *     </TableRow>
 *     <TableRow>
 *       <div>td cell 0</div>
 *       <p>td cell 1</p>
 *     </TableRow>
 * </Table>

 */
declare const TableRow: TableRowProps;
export default TableRow;
