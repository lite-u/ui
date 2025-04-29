import React, { HTMLProps } from 'react';
export type SelectSize = 'sm' | 'md' | 'lg' | 'xl';
declare const Select: React.FC<HTMLProps<HTMLDivElement> & {
    label?: string;
    children?: React.ReactNode;
    defaultValue?: string | number;
    onChange?: (value: string | number) => void;
    size?: SelectSize;
    style?: {};
}>;
export default Select;
