import { CSSProperties, FC, ReactNode } from 'react';
type HoverContextType = {
    show: boolean;
    persisted: boolean;
    onMouseEnter?: VoidFunction | null;
    onMouseLeave?: VoidFunction | null;
};
export declare const HoverContext: import("react").Context<HoverContextType>;
declare const Hover: FC<{
    children: ReactNode;
    delay?: number;
    onlyTriggerByHead?: boolean;
    persistMode?: boolean;
    style?: CSSProperties;
}>;
export default Hover;
