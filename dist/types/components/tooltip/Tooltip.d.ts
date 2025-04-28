/// <reference types="react" />
type ToolTipProps = React.HTMLProps<HTMLDivElement> & {
    xs?: boolean;
    s?: boolean;
    m?: boolean;
    l?: boolean;
    primary?: boolean;
    neutral?: boolean;
    warn?: boolean;
    error?: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode;
};
export declare const Tooltip: React.FC<ToolTipProps>;
export default Tooltip;
