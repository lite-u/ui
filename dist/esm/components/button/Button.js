import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ type, ...props }) => {
    return _jsx("button", { type: type, ...props });
};
export default Button;
