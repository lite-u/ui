import { CSSProperties } from 'react';
type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Applies the extra small size variant to the button.
     * @default false
     */
    xs?: boolean;
    /**
     * Applies the small size variant to the button.
     * @default false
     */
    s?: boolean;
    /**
     * Applies the small size variant to the button.
     * @default false
     */
    m?: boolean;
    /**
     * Applies the large size variant to the button.
     * @default false
     */
    l?: boolean;
    /**
     * If true, set the Button to disabled
     * @default false
     */
    disabled?: boolean;
    style?: CSSProperties;
};
/**
 * IconButton component
 *
 * @brief
 * A square-shaped button designed to contain only an icon, not text.
 *
 * @intro
 * Renders a circular or square icon-only button with predefined size variants.
 * Supports four sizes and applies consistent styling from theme context.
 *
 * @example
 * import { IconButton } from '@lite-u/ui'
 * import { Icon } from '@lite-u/icons'
 *
 * <IconButton s onClick={handleClick}>
 *   <Icon name="search" />
 * </IconButton>
 */
export declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
