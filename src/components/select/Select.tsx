import {useState} from 'react'

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  children?: React.ReactNode
  style?: {}
}> = ({
        label,
        children,
        ...props
      }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const [selectFocused, setSelectFocused] = useState(false)

  let styles: React.CSSProperties = {
    border: '1px solid #dfdfdf',
  }

  return <div {...props}>
    {label && <label>{label}</label>}
{/*
    <div onFocus={() => setSelectFocused(true)}
         onBlur={() => setSelectFocused(false)}>
      {children}
    </div>
*/}

    <div>
      {children}
    </div>

    {/*<select name="" id=""></select>  */}
  </div>
}

export default Select