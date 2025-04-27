/// <reference types="react" />
import { FlexProps } from './Flex';
interface RowProps extends FlexProps {
    start?: boolean;
    center?: boolean;
    stretch?: boolean;
    end?: boolean;
    around?: boolean;
    jc?: boolean;
    between?: boolean;
}
declare const Row: React.FC<React.HTMLProps<HTMLDivElement> & RowProps>;
export default Row;
