import {ReactNode} from 'react'

const Row: React.FC<React.HTMLProps<HTMLDivElement> & {
  children?: ReactNode,
  // size
  fw?: boolean,
  fh?: boolean,
  w?: number | string,
  h?: number | string,
  // align items
  start?: boolean,
  center?: boolean,
  stretch?: boolean,
  end?: boolean,
  // justify-content
  around?: boolean,
  jc?: boolean,
  between?: boolean,
  space?: number
  style?: {}
}> = ({
        children,
        fw = true,
        fh = false,
        around = false,
        jc = false,
        between = false,
        start = true,
        center = false,
        stretch = false,
        end = false,
        space = 0,
        w,
        h,
        style = {},
        ...props
      }) => {

  let styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    width: 'auto', height: 'auto', ...style,
    gap: space,
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

  if (jc) {
    styles.justifyContent = 'center'
  }

  if (between) {
    styles.justifyContent = 'space-between'
  }

  if (start) {
    styles.alignItems = 'start'
  }

  if (center) {
    styles.alignItems = 'center'
  }

  if (end) {
    styles.alignItems = 'end'
  }

  if (stretch) {
    styles.alignItems = 'stretch'
  }

  return <div
    role={'row'}
    style={styles}
    {...props}
  >
    {children}
  </div>
}

export default Row