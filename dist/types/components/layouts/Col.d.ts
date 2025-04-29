/// <reference types="react" />
import { FlexProps } from './Flex';
export interface ColumnProps extends FlexProps {
    start?: boolean;
    center?: boolean;
    stretch?: boolean;
    end?: boolean;
    around?: boolean;
    jc?: boolean;
    between?: boolean;
}
declare const Col: React.FC<ColumnProps & React.HTMLProps<HTMLDivElement>>;
export default Col;
