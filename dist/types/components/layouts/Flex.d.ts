import { CSSProperties } from 'react';
import { ContainerProps } from '../container/Container';
export interface FlexProps extends ContainerProps {
    col?: boolean;
    row?: boolean;
    flexWrap?: CSSProperties['flexWrap'];
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
    space?: CSSProperties['gap'];
}
declare const Flex: React.FC<FlexProps & ContainerProps & React.HTMLProps<HTMLDivElement>>;
export default Flex;
