import Flex, {FlexProps} from './Flex'

export interface ColumnProps extends FlexProps {
  start?: boolean,
  center?: boolean,
  stretch?: boolean,
  end?: boolean,
  // justify-content
  around?: boolean,
  jc?: boolean,
  between?: boolean,
}

const Col: React.FC<ColumnProps & React.HTMLProps<HTMLDivElement>> = ({
                                                                        children,
                                                                        around = false,
                                                                        jc = false,
                                                                        between = false,
                                                                        space = 0,
                                                                        start = true,
                                                                        center = false,
                                                                        stretch = false,
                                                                        end = false,
                                                                        role = 'column',
                                                                        style = {},
                                                                        ...props
                                                                      }) => {
  let styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    gap: space,
    width: 'auto',
    height: 'auto', ...style,
  }

  if (around) {
    styles.justifyContent = 'space-around'
  }

  if (between) {
    styles.justifyContent = 'space-between'
  }

  if (jc) {
    styles.justifyContent = 'center'
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
    col
    role={role}
    style={styles}
    {...props}
  >
    {children}
  </Flex>
}

export default Col