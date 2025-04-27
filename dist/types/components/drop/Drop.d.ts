import { HTMLProps } from 'react';
type DropProps = {
    onDragOverChanged?: (v: boolean) => void;
    onExcluded?: (msg: string, d: DataTransferItem) => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    accepts?: string[];
};
export declare const Drop: React.FC<HTMLProps<HTMLDivElement> & DropProps>;
export default Drop;
