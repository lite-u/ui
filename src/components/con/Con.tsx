import {CSSProperties, ReactNode} from 'react'

const Con: React.FC<React.HTMLProps<HTMLDivElement> & {
  children?: ReactNode,
  box?: boolean,
  ovh?: boolean,
  fw?: boolean,
  fh?: boolean,
  bg?: CSSProperties['backgroundColor'],
  color?: CSSProperties['color'],
  p?: CSSProperties['padding']
  m?: CSSProperties['margin']
  w?: CSSProperties['width']
  h?: CSSProperties['height']
  style?: {}
}> = ({
        children,
        ovh = true,
        box = true,
        fw = true,
        fh = false,
        bg = 'transparent',
        color = 'inherit',
        w,
        h,
        p,
        m,
        style = {},
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

  if (p) {
    styles.padding = p
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

  return <div
    data-role={'container'}
    style={styles}
    {...props}
  >
    {children}
  </div>
}

export default Con