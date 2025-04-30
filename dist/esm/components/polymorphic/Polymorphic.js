import { createElement } from 'react';
const Polymorphic = (props) => {
    const { tag: Tag = 'div', children, ...rest } = props;
    return createElement(Tag, rest, children);
};
export default Polymorphic;
