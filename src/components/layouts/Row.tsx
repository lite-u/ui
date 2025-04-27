import Flex, {FlexProps} from './Flex'

interface RowProps extends FlexProps {
  // align items
  start?: boolean,
  center?: boolean,
  stretch?: boolean,
  end?: boolean,
  // justify-content
  around?: boolean,
  jc?: boolean,
  between?: boolean,
}

const Row: React.FC<React.HTMLProps<HTMLDivElement> & RowProps> = ({
                                                                     children,
                                                                     around = false,
                                                                     jc = false,
                                                                     between = false,
                                                                     start = true,
                                                                     center = false,
                                                                     stretch = false,
                                                                     end = false,
                                                                     role = 'row',
                                                                     space = 0,
                                                                     style = {},
                                                                     ...props
                                                                   }) => {

  let styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    width: 'auto', height: 'auto', ...style,
    gap: space,
  }

  if (around) {
    styles.justifyContent = 'space-around'
  }

  if (jc) {
    styles.justifyContent = 'center'
  }

  if (between) {
    styles.justifyContent = 'space-between'
  }

  if (start) {
    styles.alignItems = 'start'
  }

  if (center) {
    styles.alignItems = 'center'
  }

  if (end) {
    styles.alignItems = 'end'
  }

  if (stretch) {
    styles.alignItems = 'stretch'
  }

  return <Flex
    role={role}
    style={styles}
    {...props}
  >
    {children}
  </Flex>
}

export default Row