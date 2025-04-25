import React from 'react';
declare const Select: React.FC<{
    label?: string;
    children?: React.ReactNode;
    defaultValue?: string | number;
    onChange?: (value: string | number) => void;
    style?: {};
}>;
export default Select;
