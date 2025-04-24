import {CSSProperties, ReactNode} from 'react'

const Con: React.FC<React.HTMLProps<HTMLDivElement> & {
  children: ReactNode,
  box?: boolean,
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
        box = true,
        fw = true,
        fh = false,
        bg = 'transparent',
        color = 'auto',
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

  return <div
    role={'O'}
    style={styles}
    {...props}
  >
    {children}
  </div>
}

export default Con