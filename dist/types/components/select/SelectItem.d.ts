import { ReactNode } from 'react';
declare const SelectItem: React.FC<React.HTMLProps<HTMLDivElement> & {
    label?: string;
    value: string | number;
    children: ReactNode;
    style?: {};
}>;
export default SelectItem;
