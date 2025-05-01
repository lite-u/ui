type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    xs?: boolean;
    s?: boolean;
    m?: boolean;
    l?: boolean;
    neutral?: boolean;
    style?: React.CSSProperties;
};
export declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
