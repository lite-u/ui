import {useContext} from 'react'
import SelectContext from './SelectContext'

const SelectItem: React.FC<React.HTMLProps<HTMLDivElement> & {
  label?: string,
  value: string,
  children: React.ReactNode,
  style?: {}
}> = ({
        label,
        value,
        children,
        ...props
      }) => {
  const context = useContext(SelectContext)
  if (!context) return null

  const {setValue} = context

  return (
    <div onClick={() => setValue(value)} {...props}>
      {children}
    </div>
  )
}

export default SelectItem