/// <reference types="react" />
declare const SelectContext: import("react").Context<{
    value: string;
    setValue: (v: string) => void;
} | null>;
export default SelectContext;
