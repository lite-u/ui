import {ReactNode} from 'react'
import Interactable from '../interactive/Interactable'
import {useLiteUIContext} from '../../LiteUIProvider'

const Link: React.FC<React.HTMLProps<HTMLAnchorElement> & {
  children: ReactNode,
  fw?: boolean,
  fh?: boolean,
}> = ({
        children,
        fw = true,
        fh = true,
        style = {},
        ...props
      }) => {
  const {theme} = useLiteUIContext()

  return <Interactable tag={'a'}
                       hover={{
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
  </Interactable>
}

export default Link