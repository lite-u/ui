const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { size: 'sm' | 'md' | 'xl' }> = ({
                                                                                                          type,
                                                                                                          ...props
                                                                                                        }) => {

  return <button type={type} {...props}/>
}

export default Button