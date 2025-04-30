import {createElement, ElementType, HTMLAttributes} from 'react'

export type PolymorphicProps<T extends ElementType> = {
  tag?: T;
} & HTMLAttributes<HTMLElement>;

const Polymorphic = <T extends ElementType>(
  props: PolymorphicProps<T>,
) => {
  const {tag, children, ...rest} = props

  return createElement(tag as ElementType, rest, children)
}

export default Polymorphic