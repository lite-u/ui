import { CSSProperties, FC, ReactNode } from 'react';
type TimingFunction = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | `cubic-bezier(${number}, ${number}, ${number}, ${number})`;
export type FromType = {
    [key in keyof CSSProperties]: CSSProperties[key] | {
        value: CSSProperties[key];
        effect?: TimingFunction;
        duration?: number;
        delay?: number;
    };
};
export type TransitionProps = {
    visible: boolean;
    from?: FromType;
    to: FromType;
    transformOrigin?: string;
    effect?: TimingFunction;
    duration?: number;
    leaveDuration?: number;
    delay?: number;
    children: ReactNode;
    style?: CSSProperties;
};
declare const Transition: FC<TransitionProps>;
export default Transition;
