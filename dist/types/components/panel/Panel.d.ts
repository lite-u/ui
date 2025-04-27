import { ReactNode } from 'react';
import { ColumnProps } from '../layouts/Col';
declare const Panel: React.FC<{
    title: string;
    titleClass?: string;
    boxClass?: string;
    children?: ReactNode;
} & ColumnProps & React.HTMLProps<HTMLDivElement>>;
export default Panel;
