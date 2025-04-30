import {JSX} from 'react/jsx-runtime'
import {createElement} from 'react'

type ElementTag = keyof JSX.IntrinsicElements;

type PropsOf<T extends ElementTag> = JSX.IntrinsicElements[T];
export type PolymorphicProps<T extends ElementTag> = {
  tag?: T;
  children?: React.ReactNode;
} & PropsOf<T>;

const Polymorphic = <T extends ElementTag = 'div'>(
  props: PolymorphicProps<T>,
) => {
  const {tag: Tag = 'div', children, ...rest} = props

  return createElement(Tag, rest, children)
}

export default Polymorphic