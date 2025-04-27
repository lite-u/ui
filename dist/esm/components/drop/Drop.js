import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from 'react';
import Con from '../con/Con';
export const Drop = ({ onDragOverChanged, onExcluded, children, style = {}, onDragEnter, onDragLeave, onDragOver, onDrop, accepts = [], ...props }) => {
    const [isDragging, setIsDragging] = useState(false);
    const dragCounter = useRef(0);
    const handleDragEnter = useCallback((e) => {
        console.log(e.dataTransfer.items[0]);
        onDragEnter && onDragEnter(e);
        if (!handleFileType(e))
            return;
        dragCounter.current++;
        if (dragCounter.current === 1) {
            setIsDragging(true);
        }
    }, []);
    const handleDragLeave = useCallback((e) => {
        onDragLeave && onDragLeave(e);
        if (!handleFileType(e))
            return;
        dragCounter.current--;
        if (dragCounter.current === 0) {
            setIsDragging(false);
        }
    }, []);
    const handleDragOver = useCallback((e) => {
        onDragOver && onDragOver(e);
        if (!handleFileType(e))
            return;
    }, []);
    const handleDrop = useCallback((e) => {
        if (!handleFileType(e))
            return;
        dragCounter.current = 0;
        setIsDragging(false);
        onDrop && onDrop(e);
    }, []);
    const handleFileType = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const firstFile = e.dataTransfer.items[0];
        if (!(firstFile && firstFile.type)) {
            onExcluded && onExcluded('File type has not been set in the accepts parameter.', firstFile);
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
    useEffect(() => {
        onDragOverChanged && onDragOverChanged(isDragging);
    }, [isDragging]);
    return _jsx(Con, { fw: true, fh: true, style: styles, ...props, onDragEnter: handleDragEnter, onDragLeave: handleDragLeave, onDragOver: handleDragOver, onDrop: handleDrop, children: children });
};
export default Drop;
