/// <reference types="react" />
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
export declare const Button: React.FC<ButtonProps>;
export default Button;
