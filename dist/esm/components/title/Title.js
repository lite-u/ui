import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
const Title = ({ h1, h2, h3, h4, h5, h6, children, ...props }) => {
    const theme = useTheme();
    const styles = { fontWeight: 'bold' };
    if (h1)
        return _jsx("h1", { style: styles, children: children });
    if (h2)
        return _jsx("h2", { style: styles, children: children });
    if (h3)
        return _jsx("h3", { style: styles, children: children });
    if (h4)
        return _jsx("h4", { style: styles, children: children });
    if (h5)
        return _jsx("h5", { style: styles, children: children });
    if (h6)
        return _jsx("h6", { style: styles, children: children });
    return _jsx("h1", { children: children });
};
export default Title;
