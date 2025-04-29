import { ReactNode } from 'react';
declare const MenuItemBase: React.FC<React.HTMLProps<HTMLDivElement> & {
    children: ReactNode;
    active?: boolean;
    activeStyle?: React.CSSProperties;
}>;
export default MenuItemBase;
