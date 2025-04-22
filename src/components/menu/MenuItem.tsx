import {ReactNode} from 'react'

const MenuItem: React.FC<{ children: ReactNode }> = ({_, children, ...props}) => {

  return <div style={{
    height: 30,
    padding: 8,
    fontSize: 16,
  }}
              {...props}>
    {children}
  </div>
}

export default MenuItem