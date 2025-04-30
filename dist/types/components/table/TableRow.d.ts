import { ReactNode } from 'react';
declare const TableRow: React.FC<React.HTMLProps<HTMLTableRowElement> & {
    children: ReactNode[];
    head?: boolean;
    style?: {};
}>;
export default TableRow;
