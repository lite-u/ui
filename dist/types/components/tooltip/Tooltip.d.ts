/// <reference types="react" />
type TooltipPosition = 't' | 'r' | 'b' | 'l' | 'tl' | 'tr' | 'bl' | 'br';
type ToolTipProps = React.HTMLProps<HTMLDivElement> & {
    title: string;
    bgColor?: string;
    color?: string;
    delay?: number;
    position?: TooltipPosition;
    children: React.ReactElement;
};
export declare const Tooltip: React.FC<ToolTipProps>;
export default Tooltip;
