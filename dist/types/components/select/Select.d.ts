type SelectProps = Omit<React.HTMLProps<HTMLDivElement>, 'disabled'> & {
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
     * Set Select to disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Inline styles to customize the select element.
     */
    style?: React.CSSProperties;
    /**
     * Custom styles applied to each `SelectItem` within the dropdown.
     */
    itemStyle?: React.CSSProperties;
    /**
     * The initial selected value of the select component.
     * @default \-
     */
    selectValue?: string | number;
    /**
     * Callback fired when the selected value changes.
     * Receives the new value as a string or number.
     * @default \-
     * */
    onSelectChange?: (value: string | number) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
};
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
 * <Select s defaultValue={'2'}>
 *   <SelectItem value={'1'}>1</SelectItem>
 *   <SelectItem value={'2'}>2</SelectItem>
 *   <SelectItem value={'3'}>3</SelectItem>
 * </Select>
 */
declare const Select: React.FC<SelectProps>;
export default Select;
