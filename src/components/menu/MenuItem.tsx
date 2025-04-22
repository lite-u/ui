import {ReactNode} from 'react'

const MenuItem: React.FC<{ children: ReactNode }> = ({_, children, ...props}) => {

  return <div {...props}>
    {children}
  </div>
}

export default MenuItem