import { jsx as _jsx } from "react/jsx-runtime";
import Polymorphic from '../polymorphic/Polymorphic';
const CompA = ({ tag, children, onMouseEnter, style = {}, activeStyle, ...rest }) => {
    return Polymorphic({
        tag,
        children,
        // style: {},
        /*    onMouseEnter: (e) => {
              onMouseEnter && onMouseEnter(e)
            },*/
        ...rest,
    });
};
export const CompB = () => {
    return _jsx(CompA, { tag: 'div', children: "hello" });
};
export default CompA;
