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
/**
 * Transition component
 *
 * @brief
 * Animates its children from one style state to another based on visibility.
 *
 * @intro
 * Provides smooth CSS transitions for child elements. Supports property-level control of animation duration,
 * delay, and timing function. When `visible` changes, styles interpolate from `from` to `to` definitions.
 *
 * @example
 * <Transition
 *   from={{ opacity: 0, scale: 0.9 }}
 *   to={{ opacity: 1, scale: 1 }}
 *   visible={show}
 * >
 *   <div>Hello world</div>
 * </Transition>
 */
declare const Transition: FC<TransitionProps>;
export default Transition;
