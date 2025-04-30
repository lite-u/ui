import { CSSProperties } from 'react';
declare const SelectContext: import("react").Context<{
    selectValue: string | number;
    itemClick: (v: string | number) => void;
    itemStyle: CSSProperties;
} | null>;
export default SelectContext;
