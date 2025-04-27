import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useRef } from 'react';
import Con from '../con/Con';
export const Drop = ({ accepts = [], onDragIsOver, onDragIsLeave, children, onDrop, style = {}, 
// native events
onDragEnter, onDragLeave, onDragOver, ...props }) => {
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
        }
        else {
            onDragIsLeave && onDragIsLeave();
        }
    }, []);
    const handleFileType = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const firstFile = e.dataTransfer.items[0];
        if (!firstFile) {
            return false;
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
