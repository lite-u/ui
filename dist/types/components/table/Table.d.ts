import { CSSProperties, ReactNode } from 'react';
export type TableProps = React.FC<React.HTMLProps<HTMLTableElement> & {
    xs?: boolean;
    s?: boolean;
    m?: boolean;
    l?: boolean;
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
     * Whether the [tableLayout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) should be set to fixed
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
    children: ReactNode;
}>;
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
declare const Table: TableProps;
export declare const useTableContext: () => {
    storedRowStyle: CSSProperties;
    storedCellStyle: CSSProperties;
};
export default Table;
