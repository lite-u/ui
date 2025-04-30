import {CSSProperties} from 'react'
import Container, {ContainerProps} from '../con/Con'

export interface FlexProps extends ContainerProps {
  col?: boolean,
  row?: boolean,
  alignItems?: CSSProperties['alignItems'],
  justifyContent?: CSSProperties['justifyContent'],
  space?: CSSProperties['gap']
}

const Flex: React.FC<FlexProps & ContainerProps & React.HTMLProps<HTMLDivElement>> = ({
                                                                                        children,
                                                                                        row = true,
                                                                                        col,
                                                                                        space = 0,
                                                                                        alignItems = 'start',
                                                                                        justifyContent = 'normal',
                                                                                        style = {},
                                                                                        role = 'flex',
                                                                                        ...props
                                                                                      }) => {
  let styles: React.CSSProperties = {
    display: 'flex',
    boxSizing: 'border-box',
    gap: space,
    ...style,
  }

  styles.alignItems = alignItems
  styles.justifyContent = justifyContent

  if (row) {
    styles.flexDirection = 'row'
  }

  if (col) {
    styles.flexDirection = 'column'
  }

  return <Container
    role={role}
    style={styles}
    {...props}  >
    {children}
  </Container>
}

export default Flex