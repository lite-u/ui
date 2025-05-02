/**
 * Select component
 *
 * @brief
 * A styled dropdown (select) component.
 *
 * @intro
 * Renders a `<select>` like element styled according to theme context. Supports multiple sizes
 * and validation states.
 *
 * @example
 * import { Select } from '@lite-u/ui'
 *
 * <Select>
 *   <option value="1">One</option>
 *   <option value="2">Two</option>
 * </Select>
 */
declare const Select: React.FC<React.HTMLProps<HTMLDivElement> & {
    /**
     * Extra small size variant for the select.
     * @default false
     */
    xs?: boolean;
    /**
     * Small size variant for the select.
     * @default false
     */
    s?: boolean;
    /**
     * Medium size variant for the select.
     * @default true
     */
    m?: boolean;
    /**
     * Large size variant for the select.
     * @default false
     */
    l?: boolean;
    /**
     * Inline styles to customize the select element.
     */
    style?: React.CSSProperties;
    defaultValue?: string | number;
    onChange?: (value: string | number) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}>;
export default Select;
