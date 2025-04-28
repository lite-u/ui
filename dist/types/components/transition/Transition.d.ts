import { CSSProperties, FC, ReactNode } from 'react';
type TimingFunction = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | `cubic-bezier(${number}, ${number}, ${number}, ${number})`;
declare const Transition: FC<{
    visible: boolean;
    scale?: {
        from: number;
        to: number;
    };
    translate?: {
        from: string;
        to: string;
    };
    opacity?: {
        from: number;
        to: number;
        duration?: number;
        effect?: TimingFunction;
    };
    width?: {
        from: CSSProperties['width'];
        to: CSSProperties['width'];
    };
    height?: {
        from: CSSProperties['height'];
        to: CSSProperties['height'];
    };
    top?: {
        from: CSSProperties['top'];
        to: CSSProperties['top'];
    };
    right?: {
        from: CSSProperties['right'];
        to: CSSProperties['right'];
    };
    bottom?: {
        from: CSSProperties['bottom'];
        to: CSSProperties['bottom'];
    };
    left?: {
        from: CSSProperties['left'];
        to: CSSProperties['left'];
    };
    effect: TimingFunction;
    duration: number;
    children: ReactNode;
}>;
export default Transition;
