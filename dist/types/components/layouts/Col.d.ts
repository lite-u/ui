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
declare const Col: React.FC<ColumnProps & React.HTMLProps<HTMLDivElement>>;
export default Col;
