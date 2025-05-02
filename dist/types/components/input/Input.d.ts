declare const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    xs?: boolean;
    s?: boolean;
    m?: boolean;
    l?: boolean;
    number?: boolean;
    primary?: boolean;
    warn?: boolean;
    error?: boolean;
    neutral?: boolean;
    style?: {};
}>;
export default Input;
