/// <reference types="react" />
declare const SelectContext: import("react").Context<{
    value: string | number;
    itemClick: (v: string | number) => void;
} | null>;
export default SelectContext;
