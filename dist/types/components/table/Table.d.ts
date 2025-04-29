/// <reference types="react" />
declare const Table: React.FC<React.HTMLProps<HTMLTableElement> & {
    fw?: boolean;
    fh?: boolean;
    /**
     * CSSProperties['tableLayout']
     */
    fixed?: boolean;
    style?: {};
}>;
export default Table;
