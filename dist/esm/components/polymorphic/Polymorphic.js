export {};
// export type PolymorphicHTMLTypeOf<T extends PolymorphicTagType> = HTMLElementTagNameMap[T]
// export type PropsOf<T extends PolymorphicTagType> = IntrinsicElements[T];
/*
export type PolymorphicProps<T extends PolymorphicTagType> = IntrinsicElements[T] & {
  // tag?: T;
  // ref?: Ref<HTMLElementTagNameMap[T]>
}
*/
/*
const Polymorphic = <T extends PolymorphicTagType>(
  props: PolymorphicProps<T>,
) => {
  const {tag, children, ...rest} = props

  return createElement(tag as PolymorphicTagType, rest, children)
}*/
// export default Polymorphic
