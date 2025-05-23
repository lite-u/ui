import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from 'react-dom';
/**
 * Modal component
 *
 * @brief
 * A flexible modal dialog component that overlays content on top of the existing UI.
 *
 * @intro
 * Renders children inside a centered modal container with a customizable backdrop and style.
 * Supports optional backdrop click handling.
 *
 * @example
 * import { Modal } from '@lite-u/ui'
 *
 * <Modal onBackdropClick={() => setOpen(false)}>
 *   <div>Modal Content</div>
 * </Modal>
 */
const Modal = ({ children, style, onBackdropClick, backdropBg = 'rgba(0,0,0,.5)' }) => {
    return createPortal(_jsxs("div", { "data-name": 'modal-root', style: {
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
            zIndex: 1000,
            ...style,
        }, children: [_jsx("div", { "data-name": 'modal-backdrop', style: {
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'width': '100%',
                    'height': '100%',
                    zIndex: -1,
                    pointerEvents: onBackdropClick ? 'auto' : 'none',
                    backgroundColor: backdropBg,
                }, onClick: () => {
                    if (onBackdropClick) {
                        onBackdropClick();
                    }
                } }), children] }), document.body);
};
export default Modal;
