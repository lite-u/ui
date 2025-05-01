import { ReactNode } from 'react';
import { ContainerProps } from '../container/Container';
declare const Panel: React.FC<{
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    size?: 'md' | 'sm' | 'xs' | 'lg';
    title: string;
    titleStyle?: React.CSSProperties;
    titleClass?: string;
    boxStyle?: React.CSSProperties;
    boxClass?: string;
    children?: ReactNode;
} & ContainerProps & React.HTMLProps<HTMLDivElement>>;
export default Panel;
