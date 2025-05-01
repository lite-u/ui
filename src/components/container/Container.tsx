import {CSSProperties, ReactNode} from 'react'

export interface ContainerProps {
  children?: ReactNode,
  box?: boolean,
  ovh?: boolean,
  ova?: boolean,
  fw?: boolean,
  fh?: boolean,
  tl?: boolean,
  tc?: boolean,
  tr?: boolean,
  bg?: CSSProperties['backgroundColor'],
  color?: CSSProperties['color'],
  rounded?: boolean,
  border?: boolean,
  ib?: boolean,
  borderColor?: CSSProperties['borderColor'],
  p?: CSSProperties['padding']
  pt?: CSSProperties['paddingTop']
  pr?: CSSProperties['paddingRight']
  pb?: CSSProperties['paddingBottom']
  pl?: CSSProperties['paddingLeft']
  m?: CSSProperties['margin']
  mt?: CSSProperties['marginTop']
  mr?: CSSProperties['marginRight']
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  maxW?: CSSProperties['maxWidth']
  maxH?: CSSProperties['maxHeight']
  minW?: CSSProperties['minWidth']
  minH?: CSSProperties['minHeight']
  w?: CSSProperties['width']
  h?: CSSProperties['height']
  role?: string
  style?: {}
}

const Container: React.FC<React.HTMLProps<HTMLDivElement> & ContainerProps> = ({
                                                                                 children,
                                                                                 ovh = false,
                                                                                 ova = false,
                                                                                 box = true,
                                                                                 fw = true,
                                                                                 fh = false,
                                                                                 tl = true,
                                                                                 tc = false,
                                                                                 tr = false,
                                                                                 bg,
                                                                                 color,
                                                                                 border,
                                                                                 rounded,
                                                                                 ib,
                                                                                 borderColor = '#dfdfdf',
                                                                                 w,
                                                                                 h,
                                                                                 maxW,
                                                                                 maxH,
                                                                                 minW,
                                                                                 minH,
                                                                                 p,
                                                                                 m,
                                                                                 pt,
                                                                                 pr,
                                                                                 pb,
                                                                                 pl,
                                                                                 mt,
                                                                                 mr,
                                                                                 mb,
                                                                                 ml,
                                                                                 style = {},
                                                                                 role = 'container',
                                                                                 ...props
                                                                               }) => {

  let styles: React.CSSProperties = {
    width: 'auto',
    height: 'auto',
    ...style,
  }

  if (fw) {
    styles.width = '100%'
  }

  if (fh) {
    styles.height = '100%'
  }

  if (w) {
    styles.width = w
  }

  if (h) {
    styles.height = h
  }

  if (maxW) {
    styles.maxWidth = maxW
  }

  if (maxH) {
    styles.maxHeight = maxH
  }

  if (minW) {
    styles.minWidth = minW
  }

  if (minH) {
    styles.minHeight = minH
  }

  if (p) {
    styles.padding = p
  }

  if (pt) {
    styles.paddingTop = pt
  }

  if (pr) {
    styles.paddingRight = pr
  }

  if (pb) {
    styles.paddingBottom = pb
  }

  if (pl) {
    styles.paddingLeft = pl
  }

  if (mt) {
    styles.marginTop = mt
  }

  if (mr) {
    styles.marginRight = mr
  }

  if (mb) {
    styles.marginBottom = mb
  }

  if (ml) {
    styles.marginLeft = ml
  }

  if (m) {
    styles.margin = m
  }

  if (box) {
    styles.boxSizing = 'border-box'
  }

  if (bg) {
    styles.background = bg
  }

  if (color) {
    styles.color = color
  }

  if (ovh) {
    styles.overflow = 'hidden'
  }

  if (ova) {
    styles.overflow = 'auto'
  }

  if (tl) {
    styles.textAlign = 'left'
  }

  if (tc) {
    styles.textAlign = 'center'
  }

  if (tr) {
    styles.textAlign = 'right'
  }

  if (border) {
    styles.border = '1px solid ' + borderColor
  }

  if (rounded) {
    styles.borderRadius = 5
  }

  if (ib) {
    styles.display = 'inline-block'
  }

  return <div
    role={role}
    style={styles}
    {...props}
  >
    {children}
  </div>
}
export const Con = Container
export default Container
