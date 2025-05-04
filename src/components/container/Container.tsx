import {CSSProperties} from 'react'

export interface ContainerProps {
  /**
   * If true, applies `box-sizing: border-box` to the container.
   * @default true
   */
  box?: boolean,
  /**
   * If true, applies `overflow: hidden`.
   * @default false
   */
  ovh?: boolean,
  /**
   * If true, applies `overflow: auto`.
   * @default false
   */
  ova?: boolean,
  /**
   * If true, sets width to 100%.
   * @default true
   */
  fw?: boolean,
  /**
   * If true, sets height to 100%.
   * @default false
   */
  fh?: boolean,
  /**
   * If true, aligns text to the left.
   * @default false
   */
  tl?: boolean,
  /**
   * If true, aligns text to the center.
   * @default false
   */
  tc?: boolean,
  /**
   * If true, aligns text to the right.
   * @default false
   */
  tr?: boolean,
  /**
   * Background color of the container.
   * @default \-
   */
  bg?: CSSProperties['backgroundColor'],
  /**
   * Text color of the container.
   * @default \-
   */
  color?: CSSProperties['color'],
  /**
   * Font size of the container text.
   * @default 14
   */
  fz?: CSSProperties['fontSize'],
  /**
   * If true, applies border-radius of 5px.
   * @default \-
   */
  rounded?: boolean,
  /**
   * If true, applies a 1px solid border with the specified border color.
   * @default \-
   */
  border?: boolean,
  /**
   * If true, sets display to inline-block.
   * @default \-
   */
  ib?: boolean,
  /**
   * Color of the border.
   * @default #dfdfdf
   */
  borderColor?: CSSProperties['borderColor'],
  /**
   * Padding of the container.
   * @default \-
   */
  p?: CSSProperties['padding']
  /**
   * Padding top of the container.
   * @default \-
   */
  pt?: CSSProperties['paddingTop']
  /**
   * Padding right of the container.
   * @default \-
   */
  pr?: CSSProperties['paddingRight']
  /**
   * Padding bottom of the container.
   * @default \-
   */
  pb?: CSSProperties['paddingBottom']
  /**
   * Padding left of the container.
   * @default \-
   */
  pl?: CSSProperties['paddingLeft']
  /**
   * Margin of the container.
   * @default \-
   */
  m?: CSSProperties['margin']
  /**
   * Margin top of the container.
   * @default \-
   */
  mt?: CSSProperties['marginTop']
  /**
   * Margin right of the container.
   * @default \-
   */
  mr?: CSSProperties['marginRight']
  /**
   * Margin bottom of the container.
   * @default \-
   */
  mb?: CSSProperties['marginBottom']
  /**
   * Margin left of the container.
   * @default \-
   */
  ml?: CSSProperties['marginLeft']
  /**
   * Maximum width of the container.
   * @default \-
   */
  maxW?: CSSProperties['maxWidth']
  /**
   * Maximum height of the container.
   * @default \-
   */
  maxH?: CSSProperties['maxHeight']
  /**
   * Minimum width of the container.
   * @default \-
   */
  minW?: CSSProperties['minWidth']
  /**
   * Minimum height of the container.
   * @default \-
   */
  minH?: CSSProperties['minHeight']
  /**
   * Width of the container.
   * @default \-
   */
  w?: CSSProperties['width']
  /**
   * Height of the container.
   * @default \-
   */
  h?: CSSProperties['height']
  /**
   * ARIA role attribute for the container.
   * @default 'container'
   */
  role?: string
}

/**
 * Container component
 *
 * @brief
 * A flexible layout and style container that adapts to various UI layout needs.
 *
 * @intro
 * Provides dynamic box, margin, padding, overflow, and size styling through a rich set of shorthand props.
 * Useful as a base layout block across components or pages.
 * `Con` is an Alias of Container
 *
 * @example
 *
 * import { Container } from '@lite-u/ui'
 * // Con is an Alias of Container
 * import { Con } from '@lite-u/ui'
 *
 * <Container p={20} bg="#f9f9f9" fw fh>
 *   <h2>Content</h2>
 * </Container>
 */
const Container: React.FC<React.HTMLProps<HTMLDivElement> & ContainerProps> = ({
                                                                                 children,
                                                                                 ovh = false,
                                                                                 ova = false,
                                                                                 box = true,
                                                                                 fw = true,
                                                                                 fh = false,
                                                                                 tl,
                                                                                 tc,
                                                                                 tr,
                                                                                 fz,
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
    fontSize: fz,
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
