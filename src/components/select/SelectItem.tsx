const SelectItem: React.FC<React.HTMLProps<HTMLDivElement> & {
  label?: string,
  children: React.ReactNode,
  style?: {}
}> = ({
        label,
        children,
        ...props
      }) => {
  /*  let styles: React.CSSProperties = {
      border: '1px solid #dfdfdf',
    }*/

  return <div {...props}>
    {label && <label>{label}</label>}
    {children}
  </div>
}

export default SelectItem