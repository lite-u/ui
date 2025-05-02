import {Children, CSSProperties, ReactNode, useState} from 'react'
import {useTableContext} from './Table'

export type TableRowProps = React.FC<React.HTMLProps<HTMLTableRowElement> & {
  children: ReactNode,
  /**
   * If true, renders the row using `<th>` elements instead of `<td>`, and wrap into `<thead>` rather than `<tbody>`.
   * @default false
   */
  head?: boolean,
  style?: {}
}>

/**
 * TableRow component
 *
 * @brief
 * Represents a table row for use within the Table component.
 *
 * @intro
 * Renders a styled `<tr>` element with automatically applied context-based row and cell styling.
 *
 * Can optionally render as a header row using the `head` prop.
 *
 * TableRow with `head` prop: recognized as a `thead` row
 *
 * TableRow without `head` prop: recognized as a `tbody` row
 *
 * TableRow doesn’t require `td`(or `th`) — its children are automatically wrapped in <td>(or `th`) tags.
 *
 * @example
 * import { Table, TableRow } from '@lite-u/ui'
 *
 * const TableComp = () => {
 *   return <Table>
 *       <TableRow head>
 *         <h1>th cell 0</h1>
 *         <h2>th cell 1</h2>
 *       </TableRow>
 *       <TableRow>
 *         <div>td cell 0</div>
 *         <p>td cell 1</p>
 *       </TableRow>
 *   </Table>
 * }
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