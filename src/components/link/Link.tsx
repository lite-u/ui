import {ReactNode} from 'react'
import Hoverable from '../hover/Hoverable'
import {useLiteUIContext} from '../../LiteUIProvider'

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
  const {theme} = useLiteUIContext()

  return <Hoverable
    tag={'a'}
    activeStyle={{
      color: theme.colors.secondary,
    }}
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
    {...props}
  >
    {children}
  </Hoverable>
}

export default Link