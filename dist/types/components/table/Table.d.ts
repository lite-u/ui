import { CSSProperties } from 'react';
declare const Table: React.FC<React.HTMLProps<HTMLTableElement> & {
    fw?: boolean;
    fh?: boolean;
    /**
     * CSSProperties['tableLayout']
     */
    fixed?: boolean;
    rowStyle?: CSSProperties;
    cellStyle?: CSSProperties;
}>;
export declare const useTableContext: () => {
    storedRowStyle: CSSProperties;
    storedCellStyle: CSSProperties;
};
export default Table;
