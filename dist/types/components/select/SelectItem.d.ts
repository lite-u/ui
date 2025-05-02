import { ReactNode } from 'react';
/**
 * SelectItem component
 *
 * @brief
 * An individual selectable item used within the Select dropdown.
 *
 * @intro
 * Displays a styled item that responds to click and keyboard interactions. Automatically highlights when selected.
 * Must be used inside a `Select` component to inherit context.
 *
 * @example
 * import { Select, SelectItem } from '@lite-u/ui'
 *
 * <Select>
 *   <SelectItem value="1">Option 1</SelectItem>
 *   <SelectItem value="2">Option 2</SelectItem>
 * </Select>
 */
declare const SelectItem: React.FC<React.HTMLProps<HTMLDivElement> & {
    /**
     * Optional label for the item, useful for accessibility or search indexing.
     */
    label?: string;
    /**
     * The unique value of the item. Used to track selection state.
     */
    value: string | number;
    /**
     * The visible content of the select item.
     */
    children: ReactNode;
}>;
export default SelectItem;
