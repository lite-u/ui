import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
const Paragraph = ({ children, ...props }) => {
    const theme = useTheme();
    return _jsx("p", { ...props, children: children });
};
export const P = Paragraph;
export default Paragraph;
