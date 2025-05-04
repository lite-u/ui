import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useRef } from 'react';
import Con from '../container/Container';
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
export const Drop = ({ accepts = [], onDragIsOver, onDragIsLeave, children, onDropped, style = {}, 
// native events
onDrop, onDragEnter, onDragLeave, onDragOver, ...props }) => {
    const dragCounter = useRef(0);
    const handleDragEnter = useCallback((e) => {
        onDragEnter && onDragEnter(e);
        const f = handleFileType(e);
        e.dataTransfer.dropEffect = f ? 'copy' : 'none';
        dragCounter.current++;
        if (dragCounter.current === 1) {
            onDragIsOver && onDragIsOver(f);
        }
    }, []);
    const handleDragLeave = useCallback((e) => {
        onDragLeave && onDragLeave(e);
        handleFileType(e);
        dragCounter.current--;
        if (dragCounter.current === 0) {
            onDragIsLeave && onDragIsLeave();
        }
    }, []);
    const handleDragOver = useCallback((e) => {
        onDragOver && onDragOver(e);
        const f = handleFileType(e);
        e.dataTransfer.dropEffect = f ? 'copy' : 'none';
    }, []);
    const handleDrop = useCallback((e) => {
        const f = handleFileType(e);
        dragCounter.current = 0;
        if (f) {
            onDrop && onDrop(e);
            onDropped && onDropped(e, f);
        }
        else {
            onDragIsLeave && onDragIsLeave();
        }
    }, []);
    const handleFileType = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const firstFile = e.dataTransfer.items[0];
        // console.log(e)
        // Safari can't read file list while dragging
        if (!firstFile && e.type !== 'drop') {
            return true;
        }
        const fileType = firstFile.type;
        // always true when user set accepts as empty
        if (accepts.length === 0)
            return true;
        for (let i = 0; i < accepts.length; i++) {
            const currRule = accepts[i];
            if (currRule.includes('*')) {
                return fileType.startsWith(currRule.replace('*', ''));
            }
            if (currRule === fileType) {
                return true;
            }
        }
        return false;
    };
    const styles = {
        ...style,
    };
    return _jsx(Con, { fw: true, fh: true, "data-role": 'drop', style: styles, ...props, onDragEnter: handleDragEnter, onDragLeave: handleDragLeave, onDragOver: handleDragOver, onDrop: handleDrop, children: children });
};
export default Drop;
