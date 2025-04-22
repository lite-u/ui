import {ReactNode} from 'react'

const Col: React.FC<React.HTMLProps<HTMLDivElement> & {
  children: ReactNode,
  fw?: boolean,
  fh?: boolean,
  w?: number | string,
  h?: number | string,
  around?: boolean,
  style?: {}
}> = ({
        children,
        fw = false,
        fh = true,
        around = false,
        w = 'auto',
        h = 'auto',
        style = {},
        ...props
      }) => {

  return <div
    style={{
      width: fw ? '100%' : w,
      height: fh ? '100%' : h,
      ...style,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: around ? 'space-around' : 'start',
    }}
    {...props}
  >
    {children}
  </div>
}

export default Col