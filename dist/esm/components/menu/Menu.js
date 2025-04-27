import { jsx as _jsx } from "react/jsx-runtime";
const Menu = ({ children, style = {}, space = 8, ...props }) => {
    // const {theme} = useTheme()
    return _jsx("div", { style: {
            ...style,
            gap: space,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'normal',
        }, ...props, children: children });
};
export default Menu;
