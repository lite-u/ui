import InputNumber from './InputNumber'
import InputText from './InputText'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string,
  s?: boolean
  m?: boolean
  l?: boolean, style?: {}
}> = ({
        type,
        label,
        s,
        m,
        l,
        ...props
      }) => {
  let styles: React.CSSProperties = {
    border: '1px solid #dfdfdf',
  }

  if (s) {
    Object.assign(styles, {})
  }
  return <div>
    {label && <label>{label}</label>}

    {
      type === 'number' && <InputNumber style={styles} {...props}/>
    }

    {
      type === 'text' && <InputText style={styles} {...props}/>
    }
  </div>

  return <input type={type}/>
}

export default Input