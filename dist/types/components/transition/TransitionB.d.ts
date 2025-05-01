import { CSSProperties, FC, ReactNode } from 'react';
type TimingFunction = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | `cubic-bezier(${number}, ${number}, ${number}, ${number})`;
type FromType = {
    [key in keyof CSSProperties]: CSSProperties[key] | {
        value: CSSProperties[key];
        effect?: TimingFunction;
        duration?: number;
        delay?: number;
    };
};
declare const TransitionB: FC<{
    visible: boolean;
    from: FromType;
    to: FromType;
    transformOrigin?: string;
    effect?: TimingFunction;
    duration?: number;
    delay?: number;
    children: ReactNode;
}>;
export default TransitionB;
