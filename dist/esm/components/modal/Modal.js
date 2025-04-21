import { jsx as _jsx } from "react/jsx-runtime";
const Modal = ({ children }) => {
    return _jsx("div", { className: `fixed top-0 left-0 z-300 w-full h-full flex flex-row items-center justify-center text-sm select-none`, children: _jsx("div", { style: {
                backgroundColor: '#fff',
            }, className: 'absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center text-sm select-none', children: children }) });
};
export default Modal;
