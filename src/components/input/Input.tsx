import InputNumber from './InputNumber'
import InputText from './InputText'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string }> = ({type, label, ...props}) => {

  return <div>
    {label && <label>{label}</label>}

    {
      type === 'number' && <InputNumber {...props}/>
    }

    {
      type === 'text' && <InputText {...props}/>
    }
  </div>
  return <input type={type}/>
}

export default Input