import { FromType } from '../transition/Transition';
declare const MenuItem: React.FC<React.HTMLProps<HTMLDivElement> & {
    xs?: boolean;
    s?: boolean;
    m?: boolean;
    l?: boolean;
    hoverStyle?: FromType;
    hoverEnterDuration?: number;
    hoverLeaveDuration?: number;
}>;
export default MenuItem;
