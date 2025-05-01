export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Extra small button. Sizing depends on theme.
     */
    xs?: boolean;
    /**
     * Small button. Sizing depends on theme.
     */
    s?: boolean;
    /**
     * Medium button. Sizing depends on theme.
     */
    m?: boolean;
    /**
     * Large button. Sizing depends on theme.
     */
    l?: boolean;
    /**
     * If true, applies the primary color style.
     */
    primary?: boolean;
    /**
     * If true, applies the neutral color style.
     */
    neutral?: boolean;
    /**
     * If true, applies the warning color style.
     */
    warn?: boolean;
    /**
     * If true, applies the error color style.
     */
    error?: boolean;
    /**
     * Custom inline styles for the button.
     */
    style?: React.CSSProperties;
    /**
     * The content of the button (usually text or icons).
     */
    children: React.ReactNode;
};
/**
 * Button component
 *
 * @brief A customizable button component that supports size and color variants.
 *
 * @intro Renders a theme-aware, styled button using context-based configuration. Supports four sizes (xs, s, m, l) and four variants (primary, neutral, warn, error).
 *
 * @example
 * <Button>Default</Button>
 * <Button primary xs>Confirm</Button>
 * <Button error l>Delete</Button>
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;
