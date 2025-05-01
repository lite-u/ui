import { jsx as _jsx } from "react/jsx-runtime";
import { Interactable } from '../../index';
export const ButtonBase = ({ type = 'button', ...props }) => {
    return (_jsx(Interactable, { tag: 'button', type: type, active: { opacity: .6 }, hover: { opacity: .8 }, ...props }));
};
export default ButtonBase;
