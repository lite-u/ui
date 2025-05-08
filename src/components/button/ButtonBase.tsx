import Interactable, {InteractableBaseProps} from '../interactable/Interactable'

type ButtonBaseProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: 'button' | 'reset' | 'submit'
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({
                                                        type = 'button',
                                                        ...props
                                                      }) => {
  const IAprops: InteractableBaseProps<'button'> = {
    tag: 'button',
    type,
    active: {opacity: .6},
    hover: {opacity: .8},
    ...props,
  }

  return (
    <Interactable
      {...IAprops}
    />
  )
}

export default ButtonBase