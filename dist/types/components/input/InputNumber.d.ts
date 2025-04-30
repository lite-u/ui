import { HTMLProps } from 'react';
declare const InputNumber: React.FC<HTMLProps<HTMLInputElement> & {
    style: React.CSSProperties;
    value: number;
    step: number;
    intervalTime?: number;
}>;
export default InputNumber;
