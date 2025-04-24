import {ReactNode} from 'react'

const O: React.FC<React.HTMLProps<HTMLDivElement> & {
  children: ReactNode,
  fw?: boolean,
  fh?: boolean,
  p?: number | string,
  m?: number | string,
  w?: number | string,
  h?: number | string,
  style?: {}
}> = ({
        children,
        fw = true,
        fh = false,
        w,
        h,
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

  return <div
    role={'O'}
    style={styles}
    {...props}
  >
    {children}
  </div>
}

export default O