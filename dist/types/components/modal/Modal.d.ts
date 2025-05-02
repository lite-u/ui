import { CSSProperties, HTMLProps } from 'react';
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
declare const Modal: React.FC<HTMLProps<HTMLDivElement> & {
    /**
     * Callback invoked when the backdrop is clicked.
     * @default \-
     */
    onBackdropClick?: VoidFunction;
    /**
     * Background color of the backdrop overlay.
     * @default 'rgba(0,0,0,.5)'
     */
    backdropBg?: CSSProperties['backgroundColor'];
}>;
export default Modal;
