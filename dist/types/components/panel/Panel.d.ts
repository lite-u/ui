import { ReactNode } from 'react';
import { ContainerProps } from '../con/Con';
declare const Panel: React.FC<{
    title: string;
    titleClass?: string;
    boxClass?: string;
    children?: ReactNode;
} & ContainerProps & React.HTMLProps<HTMLDivElement>>;
export default Panel;
