type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * If true, renders the button in extra small size (height: 20px, min-width: 30px).
     */
    xs?: boolean;
    /**
     * If true, renders the button in small size (height: 25px, min-width: 40px).
     */
    s?: boolean;
    /**
     * If true, renders the button in medium size. Exact dimensions depend on the theme. Default is true.
     */
    m?: boolean;
    /**
     * If true, renders the button in large size (height: 40px, min-width: 60px).
     */
    l?: boolean;
    /**
     * If true, applies the primary color style.
     */
    primary?: boolean;
    /**
     * If true, applies the neutral color style. Default is true.
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
export declare const Button: React.FC<ButtonProps>;
export default Button;
