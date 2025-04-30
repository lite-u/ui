import {createElement, ElementType, HTMLProps} from 'react'

export type PolymorphicProps<T extends ElementType> = {
  tag?: T;
} & HTMLProps<T>;

const Polymorphic = <T extends ElementType>(
  props: PolymorphicProps<T>,
) => {
  const {tag, children, ...rest} = props

  return createElement(tag as ElementType, rest, children)
}

export default Polymorphic