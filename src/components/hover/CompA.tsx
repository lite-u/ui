import {CSSProperties} from 'react'
import Polymorphic, {ElementTag, PolymorphicProps} from '../polymorphic/Polymorphic'

type CompAProps<T extends ElementTag> = {
  tag: T;
  activeStyle?: CSSProperties;
} & PolymorphicProps<T>

const CompA = <T extends ElementTag>({
                                       tag,
                                       children,
                                       onMouseEnter,
                                       style = {},
                                       activeStyle,
                                       ...rest
                                     }: CompAProps<T>) => {

  return Polymorphic<T>({
    tag,
    children,
    // style: {},
    /*    onMouseEnter: (e) => {
          onMouseEnter && onMouseEnter(e)
        },*/
    ...rest,
  })
}

export const CompB = () => {

  return <CompA tag={'div'}>hello</CompA>
}

export default CompA