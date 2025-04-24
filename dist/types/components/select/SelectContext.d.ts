/// <reference types="react" />
declare const SelectContext: import("react").Context<{
    value: string;
    itemClick: (v: string) => void;
} | null>;
export default SelectContext;
