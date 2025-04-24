/// <reference types="react" />
declare const SelectItem: React.FC<React.HTMLProps<HTMLDivElement> & {
    label?: string;
    value: string;
    children: React.ReactNode;
    style?: {};
}>;
export default SelectItem;
