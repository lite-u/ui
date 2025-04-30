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
  const flexProps = {
    ...props,
  }

  if (around) {
    flexProps.justifyContent = 'space-around'
  }

  if (jc) {
    flexProps.justifyContent = 'center'
  }

  if (between) {
    flexProps.justifyContent = 'space-between'
  }

  if (start) {
    flexProps.alignItems = 'start'
  }

  if (center) {
    flexProps.alignItems = 'center'
  }

  if (end) {
    flexProps.alignItems = 'end'
  }

  if (stretch) {
    flexProps.alignItems = 'stretch'
  }

  return <Flex
    role={role}
    style={styles}
    {...flexProps}
  >
    {children}
  </Flex>
}

export default Row