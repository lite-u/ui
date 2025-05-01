import { ReactNode } from 'react';
import { FromType } from '../transition/Transition';
declare const MenuItem: React.FC<React.HTMLProps<HTMLDivElement> & {
    children: ReactNode;
    sm?: boolean;
    hoverStyle?: FromType;
    hoverEnterDuration?: number;
    hoverLeaveDuration?: number;
}>;
export default MenuItem;
