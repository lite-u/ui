import {ReactNode} from 'react'

const Col: React.FC<React.HTMLProps<HTMLDivElement> & {
  children: ReactNode,
  fw?: boolean,
  fh?: boolean,
  w?: number | string,
  h?: number | string,
  around?: boolean,
  between?: boolean,
  // center?: boolean,
  style?: {}
}> = ({
        children,
        fw = true,
        fh = false,
        around = false,
        between = false,
        // center = false,
        w,
        h,
        style = {},
        ...props
      }) => {
  let styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: 'auto',
    height: 'auto', ...style,
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

  if (around) {
    styles.justifyContent = 'space-around'
  }
  if (between) {
    styles.justifyContent = 'space-between'
  }

  /*if (center) {
    styles.alignItems = 'center'
  }*/
  console.log(styles)
  return <div
    style={styles}
    {...props}
  >
    {children}
  </div>
}

export default Col