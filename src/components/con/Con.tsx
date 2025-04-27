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
  mw?: CSSProperties['maxWidth']
  w?: CSSProperties['width']
  h?: CSSProperties['height']
  mh?: CSSProperties['maxHeight']
  style?: {}
}> = ({
        children,
        ovh = false,
        box = true,
        fw = true,
        fh = false,
        bg,
        color = 'inherit',
        w,
        h,
        mw,
        mh,
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

  if (mw) {
    styles.maxWidth = mw
  }

  if (mh) {
    styles.maxHeight = mh
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