import React, { HTMLProps } from 'react';
export type SelectSize = 'sm' | 'md' | 'lg';
declare const Select: React.FC<HTMLProps<HTMLDivElement> & {
    label?: string;
    children?: React.ReactNode;
    defaultValue?: string | number;
    onChange?: (value: string | number) => void;
    xs?: boolean;
    s?: boolean;
    m?: boolean;
    l?: boolean;
    size?: SelectSize;
    style?: {};
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}>;
export default Select;
