import { ContainerProps } from '../container/Container';
import { CSSProperties } from 'react';
interface RowProps extends ContainerProps {
    start?: boolean;
    center?: boolean;
    stretch?: boolean;
    end?: boolean;
    wrap?: boolean;
    around?: boolean;
    jc?: boolean;
    between?: boolean;
    space?: CSSProperties['gap'];
}
declare const Row: React.FC<React.HTMLProps<HTMLDivElement> & RowProps>;
export default Row;
