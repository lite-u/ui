import { createElement } from 'react';
const Polymorphic = (props) => {
    const { tag, children, ...rest } = props;
    return createElement(tag, rest, children);
};
export default Polymorphic;
