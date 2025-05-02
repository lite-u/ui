/**
 * Input component
 *
 * @brief
 * A stylized input field supporting text and number types with size and color variants.
 *
 * @intro
 * Renders either a text or number input with support for theming, sizing, and validation states.
 * Styling is pulled from the Lite UI theme context and adjusted according to provided props.
 *
 * @example
 * import { Input } from '@lite-u/ui'
 *
 * <Input placeholder="Your name" />
 * <Input number step={0.1} error />
 * <Input label="Username" s primary />
 */
declare const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
    /**
     * Optional label to display as the `<label>`.
     * @default ''
     */
    label?: string;
    /**
     * Extra small size variant for the input.
     * @default false
     */
    xs?: boolean;
    /**
     * Small size variant for the input.
     * @default false
     */
    s?: boolean;
    /**
     * Medium size variant for the input.
     * @default true
     */
    m?: boolean;
    /**
     * Large size variant for the input.
     * @default false
     */
    l?: boolean;
    /**
     * If true, renders a number input instead of a text input.
     * @default false
     */
    number?: boolean;
    /**
     * Applies primary styling to the input field.
     * @default false
     */
    primary?: boolean;
    /**
     * Applies warning styling to the input field.
     * @default false
     */
    warn?: boolean;
    /**
     * Applies error styling to the input field.
     * @default false
     */
    error?: boolean;
    /**
     * Applies neutral styling to the input field.
     * @default true
     */
    neutral?: boolean;
    /**
     * Inline styles to customize the input field.
     */
    style?: {};
    labelStyle?: {};
    ref?: React.Ref<HTMLInputElement>;
}>;
export default Input;
