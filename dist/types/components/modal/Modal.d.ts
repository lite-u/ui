import React, { CSSProperties } from 'react';
declare const Modal: React.FC<{
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onBackdropClick?: VoidFunction;
    backdropBg?: CSSProperties['backgroundColor'];
}>;
export default Modal;
