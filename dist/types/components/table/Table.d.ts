import { CSSProperties, ReactNode } from 'react';
export type TableProps = React.FC<React.HTMLProps<HTMLTableElement> & {
    /**
     * Render the table with extra small (`xs`) size styling.
     * @default false
     */
    xs?: boolean;
    /**
     * Render the table with small (`s`) size styling.
     * @default false
     */
    s?: boolean;
    /**
     * Render the table with medium (`s`) size styling.
     * @default false
     */
    m?: boolean;
    /**
     * Render the table with large (`l`) size styling.
     * @default false
     */
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
     * Whether the [tableLayout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) should be set to `fixed`
     * @default false
     */
    fixed?: boolean;
    /**
     * Convenience way to style all table rows
     *
     */
    rowStyle?: CSSProperties;
    /**
     * Convenience way to style Hovered body rows
     */
    rowHoverStyle?: CSSProperties;
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
 * Table accepts [TableRow](./tablerow) Component as children only
 *
 * @example
 *
 * import { Table, TableRow } from '@lite-u/ui'
 *
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
    storedRowHoveredStyle: CSSProperties;
};
export default Table;
