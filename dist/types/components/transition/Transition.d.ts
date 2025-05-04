import { CSSProperties, FC, HTMLProps, ReactNode } from 'react';
type TimingFunction = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | `cubic-bezier(${number}, ${number}, ${number}, ${number})`;
export type FromType = {
    [key in keyof CSSProperties]: CSSProperties[key] | {
        value: CSSProperties[key];
        effect?: TimingFunction;
        duration?: number;
        delay?: number;
    };
};
export type TransitionProps = HTMLProps<HTMLDivElement> & {
    /**
     * Whether the transition should be visible.
     * If true, transition animates to `to` styles; otherwise, animates to `from`.
     */
    visible: boolean;
    /**
     * The initial styles before transition starts.
     * Can contain raw CSS values or detailed timing configurations.
     */
    from?: FromType;
    /**
     * The target styles to animate toward when `visible` is true.
     * Can contain raw CSS values or detailed timing configurations.
     */
    to: FromType;
    /**
     * CSS `transform-origin` value for the transition.
     * Controls the origin point of scaling/rotating transforms.
     * @default "center"
     */
    transformOrigin?: string;
    /**
     * Default timing function for all transitions unless overridden per-property.
     * @default "ease"
     */
    effect?: TimingFunction;
    /**
     * Default duration in milliseconds for entering transitions unless overridden per-property.
     * @default 300
     */
    duration?: number;
    /**
     * Default duration in milliseconds for leaving transitions unless overridden per-property.
     * @default 300
     */
    leaveDuration?: number;
    /**
     * Default delay in milliseconds before starting the transition unless overridden per-property.
     * @default 0
     */
    delay?: number;
    children: ReactNode;
};
/**
 * Transition component
 *
 * @brief
 * Animates its children from one style state to another based on visibility.
 *
 * @intro
 * To apply animations to elements typically requires external libraries or CSS files. For simplicity and control, `Transition` implements inline animations, putting all animation-related properties under your direct management.
 *
 * @example
 * import { Con, Button, Transition } from '@lite-u/ui'
 *
 * const Sample = () => {
 *   const [show, setShow] = useState(false)
 *
 *   return <Con w={100} h={100}>
 *     <Button onClick={() => setShow(!show)}>Toggle</Button>
 *     <Transition from={{opacity: 0, scale: 0.9}} to={{opacity: 1, scale: 1}} visible={show}>
 *       <div>Hello world</div>
 *     </Transition>
 *   </Con>
 * }
 */
declare const Transition: FC<TransitionProps>;
export default Transition;
