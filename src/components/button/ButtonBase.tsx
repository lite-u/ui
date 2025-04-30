import {Interactable} from '../../index'

export const ButtonBase: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
       type = 'button',
       ...props
     }) => {

  return (
    <Interactable
      tag={'button'}
      type={type}
      active={{opacity: .6}}
      hover={{opacity: .8}}
      {...props}
    />
  )
}

export default ButtonBase