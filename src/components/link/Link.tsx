import {ReactNode} from 'react'
import Hoverable from '../hover/Hoverable'

const Link: React.FC<React.HTMLProps<HTMLAnchorElement> & {
  children: ReactNode,
  fw?: boolean,
  fh?: boolean,
  style?: {}
}> = ({
        children,
        fw = true,
        fh = true,
        style = {},
        ...props
      }) => {

  return <Hoverable
    tag={'a'}
    style={{
      color: '#000',
      cursor: 'pointer',
      width: fw ? '100%' : 'auto',
      height: fh ? '100%' : 'auto',
      ...style,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}
    {...props}  >
    {children}
  </Hoverable>
}

export default Link