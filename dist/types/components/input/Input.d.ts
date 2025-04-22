/// <reference types="react" />
declare const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    s?: boolean;
    m?: boolean;
    l?: boolean;
    style?: {};
}>;
export default Input;
