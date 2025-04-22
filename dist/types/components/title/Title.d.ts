import React, { ReactNode } from 'react';
type TitleProps = {
    children: ReactNode;
    sticky?: boolean;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;
export declare const Title: React.FC<TitleProps>;
export default Title;
