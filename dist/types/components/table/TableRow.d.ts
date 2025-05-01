import { ReactNode } from 'react';
export type TableRowProps = React.FC<React.HTMLProps<HTMLTableRowElement> & {
    children: ReactNode;
    head?: boolean;
    style?: {};
}>;
declare const TableRow: TableRowProps;
export default TableRow;
