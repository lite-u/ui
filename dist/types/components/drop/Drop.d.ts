import { HTMLProps } from 'react';
type DropProps = {
    accepts?: string[];
    onDragIsOver?: (isFileTypeValid: boolean) => void;
    onDragIsLeave?: () => void;
    onDropped?: (e: React.DragEvent<HTMLDivElement>, isFileTypeValid: boolean) => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};
export declare const Drop: React.FC<HTMLProps<HTMLDivElement> & DropProps>;
export default Drop;
