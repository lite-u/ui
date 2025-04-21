const Button: React.FC<{ type: 'button' | 'reset' | 'submit', size: 'sm' | 'md' | 'xl' }> = ({type}) => {

  return <button type={type}/>
}

export default Button