import { ReactNode } from 'react';
declare const Link: React.FC<React.HTMLProps<HTMLAnchorElement> & {
    children: ReactNode;
    fw?: boolean;
    fh?: boolean;
    style?: {};
}>;
export default Link;
