import {ReactNode} from 'react'

const Row: React.FC<{
  children: ReactNode,
  fw?: boolean,
  fh?: boolean,
  w?: number | string,
  h?: number | string,
  around?: boolean,
  style?: {}
}> = ({
        children,
        fw = true,
        fh = false,
        around = false,
        w = 'auto',
        h = 'auto',
        style = {},
        ...props
      }) => {
  let styles: React.CSSProperties = {display: 'flex', flexDirection: 'row', width: 'auto', height: 'auto', ...style}

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
  return <div
    role={'row'}
    style={styles}
    {...props}
  >
    {children}
  </div>
}

export default Row