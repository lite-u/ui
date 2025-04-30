import { HTMLProps } from 'react';
declare const InputNumber: React.FC<HTMLProps<HTMLInputElement> & {
    style: React.CSSProperties;
    value: number;
    step: number;
}>;
export default InputNumber;
