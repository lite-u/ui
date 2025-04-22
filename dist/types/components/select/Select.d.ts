/// <reference types="react" />
declare const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    children?: React.ReactNode;
    style?: {};
}>;
export default Select;
