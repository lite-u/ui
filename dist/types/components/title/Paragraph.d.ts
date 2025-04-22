import React, { ReactNode } from 'react';
declare const Paragraph: React.FC<{
    size: 'sm' | 'md' | 'xl';
    children: ReactNode;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    p?: boolean;
}>;
export declare const P: React.FC<{
    size: 'sm' | 'md' | 'xl';
    children: ReactNode;
    h1?: boolean | undefined;
    h2?: boolean | undefined;
    h3?: boolean | undefined;
    h4?: boolean | undefined;
    h5?: boolean | undefined;
    h6?: boolean | undefined;
    p?: boolean | undefined;
}>;
export default Paragraph;
