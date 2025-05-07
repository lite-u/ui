import { HTMLProps } from 'react';
type DropProps = {
    /**
     * List of accepted MIME types. Wildcards like 'image/*' are supported.
     * @default []
     */
    accepts?: string[];
    /**
     * Callback triggered when a valid drag enters the drop zone.
     * @default \-
     */
    onDragIsOver?: (isFileTypeValid: boolean) => void;
    /**
     * Callback triggered when dragging leaves the drop zone.
     *
     * >Note: Safari does not reliably detect dragged files, and the onDragIsOver event is not supported in this browser.
     * @default \-
     */
    onDragIsLeave?: () => void;
    /**
     * Callback triggered when a file is dropped.
     * Provides the event and a flag indicating file type validity.
     * @default \-
     */
    onDropped?: (e: React.DragEvent<HTMLDivElement>, isFileTypeValid: boolean) => void;
    ref?: React.Ref<HTMLDivElement>;
};
/**
 * Drop component
 *
 * @brief
 * A drag-and-drop file drop zone with file type validation and customizable events.
 *
 * @intro
 * In React, applying visual cues during drag-over can sometimes cause flickering—especially when styles update frequently. The Drop component simplifies handling such interactions by managing drag-over feedback smoothly and supporting MIME-type restrictions. It also provides hooks for custom logic when files are dropped, making it an easy and reliable way to implement drag-and-drop functionality.
 *
 * \
 * ⚠️ `Caution`: Safari `CANNOT` detect files during the drag phase, so use `onDropped` ONLY for any functionality that needs to work reliably across all browsers.
 *
 * @example
 * import { Drop } from '@lite-u/ui'
 *
 * <Drop accepts={['image/png']}
 *   onDragIsOver={(f) => {})
 *   onDropped={(e, isValid) => console.log(e, isValid)}
 * >
 *   <p>Drop image files here</p>
 * </Drop>
 */
export declare const Drop: React.FC<HTMLProps<HTMLDivElement> & DropProps>;
export default Drop;
