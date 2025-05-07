import { jsx as _jsx } from "react/jsx-runtime";
import { Interactable } from '../../index';
export const ButtonBase = ({ type = 'button', ...props }) => {
    const IAprops = {
        tag: 'button',
        type,
        active: { opacity: .6 },
        hover: { opacity: .8 },
        ...props,
    };
    return (_jsx(Interactable, { ...IAprops }));
};
export default ButtonBase;
