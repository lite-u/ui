import {ReactNode} from 'react'

const Row: React.FC<{ children: ReactNode, fw?: boolean, fh?: boolean, style?: {} }> = ({
                                                                                          children,
                                                                                          fw = true,
                                                                                          fh = false,
                                                                                          style = {},
                                                                                          ...props
                                                                                        }) => {

  return <div
    style={{
      width: fw ? '100%' : 'auto',
      height: fh ? '100%' : 'auto',
      ...style,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}
    {...props}
  >
    {children}
  </div>
}

export default Row