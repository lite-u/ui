import {ReactNode} from 'react'

const Menu: React.FC<React.HTMLProps<HTMLDivElement> &
  { children: ReactNode, space?: number }> = ({
                                              children,
                                              style = {},
                                              space = 8,
                                              ...props
                                            }) => {
  // const {theme} = useTheme()

  return <div style={{
    ...style,
    gap: space,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'normal',
  }}
              {...props}>
    {children}
  </div>
}

export default Menu