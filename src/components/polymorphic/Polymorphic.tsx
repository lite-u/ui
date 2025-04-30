import {JSX} from 'react/jsx-runtime'
import {createElement, ElementType, HTMLAttributes} from 'react'

export type ElementTag = keyof JSX.IntrinsicElements;

type PropsOf<T extends ElementType> = HTMLAttributes<T>

export type PolymorphicProps<T extends ElementTag> = {
  tag: T;
  // children?: React.ReactNode;
} & PropsOf<T>;

const Polymorphic = <T extends ElementTag>(
  props: PolymorphicProps<T>,
) => {
  const {tag, children, ...rest} = props

  return createElement(tag as ElementTag, rest, children)
}

export default Polymorphic