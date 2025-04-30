import { CSSProperties } from 'react';
import { ContainerProps } from '../con/Con';
export interface FlexProps extends ContainerProps {
    col?: boolean;
    row?: boolean;
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
    space?: CSSProperties['gap'];
}
declare const Flex: React.FC<FlexProps & ContainerProps & React.HTMLProps<HTMLDivElement>>;
export default Flex;
