import Flex, {FlexProps} from './Flex'
import {ContainerProps} from '../container/Container'
import {CSSProperties} from 'react'

export interface ColumnProps extends ContainerProps {
  /**
   * Aligns children to the start of the column (left by default).
   * @default true
   */
  start?: boolean,
  /**
   * Aligns children to the center of the column.
   * @default false
   */
  center?: boolean,
  /**
   * Stretches children to fill the column width.
   * @default false
   */
  stretch?: boolean,
  /**
   * Aligns children to the end of the column (right by default).
   * @default false
   */
  end?: boolean,
  /**
   * Defines spacing between children using the CSS `gap` property.
   * @default 0
   */
  space?: CSSProperties['gap']
  // justify-content
  /**
   * Justifies children with space around them.
   * @default false
   */
  around?: boolean,
  /**
   * Justifies children with space between them.
   * @default false
   */
  between?: boolean,
  /**
   * Justifies children to the center vertically.
   * @default false
   */
  jc?: boolean,
  /**
   * Justifies children to the start vertically.
   * @default false
   */
  js?: boolean,
  /**
   * Justifies children to the end vertically.
   * @default false
   */
  je?: boolean,
}

/**
 * Column component
 *
 * @brief
 * A flexible vertical layout container built on top of the Flex component.
 *
 * @intro
 * Arranges children in a column direction using Flexbox. Supports alignment props
 * like `start`, `center`, `end`, and spacing between items using the `space` prop.
 *
 * @example
 * import { Column } from '@lite-u/ui'
 * // Col is an alias of Column
 * import { Col } from '@lite-u/ui'
 *
 * <Column center space={16}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Column>
 */
const Column: React.FC<ColumnProps & Omit<React.HTMLProps<HTMLDivElement>,'start'>> = ({
                                                                           children,
                                                                           around = false,
                                                                           jc = false,
                                                                           js = false,
                                                                           je = false,
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

  if (js) {
    flexProps.justifyContent = 'start'
  }

  if (je) {
    flexProps.justifyContent = 'end'
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

export const Col = Column
export default Column