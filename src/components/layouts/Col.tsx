import Flex, {FlexProps} from './Flex'
import {ContainerProps} from '../con/Con'
import {CSSProperties} from 'react'

export interface ColumnProps extends ContainerProps {
  start?: boolean,
  center?: boolean,
  stretch?: boolean,
  end?: boolean,
  space?: CSSProperties['gap']
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
  const flexProps: FlexProps = {
    ...props,
  }

  if (around) {
    flexProps.justifyContent = 'space-around'
  }

  if (between) {
    flexProps.justifyContent = 'space-between'
  }

  if (jc) {
    flexProps.justifyContent = 'center'
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
    col
    role={role}
    style={styles}
    {...flexProps}
  >
    {children}
  </Flex>
}

export default Col