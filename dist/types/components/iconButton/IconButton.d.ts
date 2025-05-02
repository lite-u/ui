type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    xs?: boolean;
    s?: boolean;
    m?: boolean;
    l?: boolean;
    style?: React.CSSProperties;
};
/**
 * A square-shaped button designed for icon-only content.
 *
 * It supports four size variants: `xs`, `s`, `m`, and `l`. Only one size should be passed at a time.
 * By default, the medium size (`m`) is used.
 *
 * Additional props like `style` or click handlers can be passed down as with a regular button.
 *
 * @example
 * ```tsx
 * <IconButton s onClick={handleClick}>
 *   <Icon name="search" />
 * </IconButton>
 * ```
 */
export declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
