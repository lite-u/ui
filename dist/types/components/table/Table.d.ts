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
 * Table Component
 * Accept
 * @default false
 */
declare const Table: TableProps;
export declare const useTableContext: () => {
    storedRowStyle: CSSProperties;
    storedCellStyle: CSSProperties;
};
export default Table;
