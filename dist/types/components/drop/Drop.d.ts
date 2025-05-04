import { HTMLProps } from 'react';
type DropProps = {
    /**
     * List of accepted MIME types. Wildcards like 'image/*' are supported.
     * @default []
     */
    accepts?: string[];
    /**
     * Callback triggered when a valid drag enters the drop zone.
     */
    onDragIsOver?: (isFileTypeValid: boolean) => void;
    /**
     * Callback triggered when dragging leaves the drop zone.
     */
    onDragIsLeave?: () => void;
    /**
     * Callback triggered when a file is dropped.
     * Provides the event and a flag indicating file type validity.
     */
    onDropped?: (e: React.DragEvent<HTMLDivElement>, isFileTypeValid: boolean) => void;
    /**
     * Content to be rendered inside the drop zone.
     */
    children?: React.ReactNode;
    /**
     * Custom styles for the drop container.
     */
    style?: React.CSSProperties;
};
/**
 * Drop component
 *
 * @brief
 * A drag-and-drop file drop zone with file type validation and customizable events.
 *
 * @intro
 * Wraps content with a container that listens for drag-and-drop events. You can specify
 * accepted MIME types, get feedback when dragging over or leaving the drop zone, and
 * handle dropped files with optional custom logic.
 *
 * @example
 * import { Drop } from '@lite-u/ui'
 *
 * <Drop
 *   accepts={['image/*']}
 *   onDropped={(e, isValid) => console.log(e, isValid)}
 * >
 *   <p>Drop image files here</p>
 * </Drop>
 */
export declare const Drop: React.FC<HTMLProps<HTMLDivElement> & DropProps>;
export default Drop;
