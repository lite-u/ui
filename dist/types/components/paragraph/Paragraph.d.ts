import React, { ReactNode } from 'react';
declare const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement> & {
    size?: number;
    children?: ReactNode;
    center?: boolean;
}>;
export declare const P: React.FC<React.HTMLAttributes<HTMLParagraphElement> & {
    size?: number | undefined;
    children?: ReactNode;
    center?: boolean | undefined;
}>;
export default Paragraph;
