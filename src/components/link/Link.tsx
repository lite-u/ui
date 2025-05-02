import {ReactNode} from 'react'
import Interactable from '../interactive/Interactable'
import {useLiteUIContext} from '../../LiteUIProvider'

/**
 * Link component
 *
 * @brief
 * Represents a hyperlink component with consistent styling and optional behavior controls.
 *
 * @intro
 * Renders a styled `<a>` element for internal or external navigation, supporting accessibility and customization options.
 *
 * @example
 * import { Link } from '@lite-u/ui'
 *
 * <Link href="https://example.com" target="_blank">
 *     Visit Example
 * </Link>
 */
const Link: React.FC<React.HTMLProps<HTMLAnchorElement> & {
  /**
   * The content to display inside the link.
   */
  children: ReactNode,

  /**
   * If true, the link will take up the full width of its container.
   * @default true
   */
  fw?: boolean,

  /**
   * If true, the link will take up the full height of its container.
   * @default true
   */
  fh?: boolean,
}> = ({
        children,
        fw = true,
        fh = true,
        style = {},
        ...props
      }) => {
  const {theme} = useLiteUIContext()

  return <Interactable tag={'a'}
                       hover={{
                         color: theme.colors.secondary,
                       }}
                       style={{
                         color: '#000',
                         cursor: 'pointer',
                         width: fw ? '100%' : 'auto',
                         height: fh ? '100%' : 'auto',
                         ...style,
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'space-around',
                       }}
                       {...props}
  >
    {children}
  </Interactable>
}

export default Link