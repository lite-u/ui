import { jsx as _jsx } from "react/jsx-runtime";
const Modal = ({ children, style, onBackdropClick, backdropBg }) => {
    return _jsx("div", { "data-name": 'modal-root', style: {
            'display': 'flex',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'flexDirection': 'row',
            'justifyContent': 'center',
            'alignItems': 'center',
            'width': '100%',
            'height': '100%',
            'userSelect': 'none',
        }, children: _jsx("div", { "data-name": 'modal-backdrop', style: {
                ...style,
                backgroundColor: backdropBg ? backdropBg : '#fff',
            }, onClick: () => {
                if (onBackdropClick) {
                    onBackdropClick();
                }
            }, className: 'absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center select-none', children: children }) });
};
export default Modal;
