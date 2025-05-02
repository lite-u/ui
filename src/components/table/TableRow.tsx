import {Children, CSSProperties, ReactNode, useState} from 'react'
import {useTableContext} from './Table'

export type TableRowProps = React.FC<React.HTMLProps<HTMLTableRowElement> & {
  children: ReactNode,
  /**
   * If true, renders the row using <th> elements instead of <td>, and wrap into <thead>.
   * @default false
   */
  head?: boolean,
  style?: {}
}>

/**
 * TableRow component
 *
 * @brief Represents a table row for use within the Table component.
 *
 * @intro Renders a styled < tr > element with automatically applied context-based row and cell styling. Can optionally render as a header row using the `head` prop.
 *
 * @example
 * <Table>
 *   <TableRow head>
 *     <span>th cell 0</span>
 *     <span>th cell 1</span>
 *   </TableRow>
 *   <TableRow>
 *     <span>td cell 0</span>
 *     <span>td cell 1</span>
 *   </TableRow>
 * </Table>
 */
const TableRow: TableRowProps = ({
                                   children,
                                   head = false,
                                   style = {},
                                   onMouseEnter,
                                   onMouseLeave,
                                   ...props
                                 }) => {
  const [bodyRowHoverStyle, setBodyRowHoverStyle] = useState<CSSProperties>({})
  const {storedRowHoveredStyle, storedRowStyle, storedCellStyle} = useTableContext()

  const handleMouseEnter = () => {
    if (!head) {
      setBodyRowHoverStyle(storedRowHoveredStyle)
    }
  }

  const handleMouseLeave = () => {
    setBodyRowHoverStyle({})
  }
  // console.log(theme.)
  // const filteredChildren: ReactNode[] = []
  let filteredChildren: ReactNode[] = []

  Children.forEach(children, (child) => {
    // @ts-ignore
    if (child.type) {
      filteredChildren.push(child)
    }
  })

  const rowStyle = {
    ...storedRowStyle,
  }

  const cellStyle = {
    // padding: '6px 10px',
    // border: '1px solid #b5b5b5',
    ...storedCellStyle,
  }

  const cellDivStyle = {
    width: '100%',
    height: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return <tr
    onMouseEnter={(e) => {
      handleMouseEnter()
      onMouseEnter && onMouseEnter(e)
    }}
    onMouseLeave={(e) => {
      handleMouseLeave()
      onMouseLeave && onMouseLeave(e)
    }}
    style={{
      textAlign: 'center',
      // height: 40,
      ...rowStyle,
      ...style,
      ...bodyRowHoverStyle,
    }} {...props}>
    {
      filteredChildren?.map((child, index) => {
        return head ?
          <th style={cellStyle} key={index}>
            <div style={cellDivStyle}>{child}</div>
          </th> :
          <td style={cellStyle} key={index}>
            <div style={cellDivStyle}>{child}</div>
          </td>
      })
    }
  </tr>
}

export default TableRow