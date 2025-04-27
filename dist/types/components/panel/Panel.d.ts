import { ReactNode } from 'react';
import { ContainerProps } from '../con/Con';
declare const Panel: React.FC<{
    title: string;
    titleStyle?: React.CSSProperties;
    titleClass?: string;
    boxStyle?: React.CSSProperties;
    boxClass?: string;
    children?: ReactNode;
} & ContainerProps & React.HTMLProps<HTMLDivElement>>;
export default Panel;
