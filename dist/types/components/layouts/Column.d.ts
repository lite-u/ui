import { ContainerProps } from '../container/Container';
import { CSSProperties } from 'react';
export interface ColumnProps extends ContainerProps {
    start?: boolean;
    center?: boolean;
    stretch?: boolean;
    end?: boolean;
    space?: CSSProperties['gap'];
    around?: boolean;
    jc?: boolean;
    between?: boolean;
}
declare const Column: React.FC<ColumnProps & React.HTMLProps<HTMLDivElement>>;
export declare const Col: import("react").FC<ColumnProps & import("react").HTMLProps<HTMLDivElement>>;
export default Column;
