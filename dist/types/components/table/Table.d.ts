import { CSSProperties, ReactElement } from 'react';
import { TableRowProps } from './TableRow';
export type TableProps = React.FC<React.HTMLProps<HTMLTableElement> & {
    /**
     * Whether the table should take up the full width of its parent
     * @default false
     */
    fw?: boolean;
    /**
     * Whether the table should take up the full height of its parent
     * @default false
     */
    fh?: boolean;
    /**
     * Whether the table layout should be fixed
     * @default false
     */
    fixed?: boolean;
    /**
     * Style object for table rows
     */
    rowStyle?: CSSProperties;
    /**
     * Style object for table cells
     */
    cellStyle?: CSSProperties;
    children: ReactElement<TableRowProps>[];
}>;
/**
 * Table
 *
 * A simple and easy-to-use table component with a minimal design.
 *
 * @usage
 *
 * Table Component accepts TableRow Component as children only
 *
 * TableRow with head prop: recognized as a thead row
 *
 * TableRow without head prop: recognized as a tbody row
 *
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
declare const Table: TableProps;
export declare const useTableContext: () => {
    storedRowStyle: CSSProperties;
    storedCellStyle: CSSProperties;
};
export default Table;
