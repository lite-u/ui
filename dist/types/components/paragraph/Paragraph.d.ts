import React, { CSSProperties, ReactNode } from 'react';
declare const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement> & {
    size?: number;
    children?: ReactNode;
    color?: CSSProperties['color'];
    center?: boolean;
    wb?: CSSProperties['wordBreak'];
}>;
export declare const P: React.FC<React.HTMLAttributes<HTMLParagraphElement> & {
    size?: number;
    children?: ReactNode;
    color?: CSSProperties["color"];
    center?: boolean;
    wb?: CSSProperties["wordBreak"];
}>;
export default Paragraph;
