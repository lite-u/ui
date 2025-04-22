const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & {
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
    <select name="" id=""></select>
  </div>

  return <input type={type}/>
}

export default Select