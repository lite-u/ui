const SelectItem: React.FC<React.OptionHTMLAttributes<HTMLOptionElement> & {
  label?: string,
  style?: {}
}> = ({
        type,
        label,
        ...props
      }) => {
  let styles: React.CSSProperties = {
    border: '1px solid #dfdfdf',
  }

  return <div {...props}>
    {label && <label>{label}</label>}
      <option value="1">1</option>
  </div>

  return <input type={type}/>
}

export default SelectItem