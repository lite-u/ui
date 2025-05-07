import { HTMLProps } from 'react';
export type InputNumberProps = HTMLProps<HTMLInputElement> & {
    value: number;
    step: number;
    intervalTime?: number;
    ref: React.Ref<HTMLInputElement>;
};
declare const InputNumber: React.FC<InputNumberProps>;
export default InputNumber;
