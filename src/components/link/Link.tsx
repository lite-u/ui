import {ReactNode} from 'react'

const Link: React.FC<React.HTMLProps<HTMLAnchorElement> & {
  children: ReactNode,
  fw?: boolean,
  fh?: boolean,
  style?: {}
}> = ({
        children,
        fw = false,
        fh = true,
        style = {},
        ...props
      }) => {

  return <a
    style={{
      width: fw ? '100%' : 'auto',
      height: fh ? '100%' : 'auto',
      ...style,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}
    {...props}
  >
    {children}
  </a>
}

export default Link