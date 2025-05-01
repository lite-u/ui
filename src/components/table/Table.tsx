import TableBase from './TableBase'
import {Children, createContext, CSSProperties, ReactElement, ReactNode, useContext} from 'react'
import TableRow, {TableRowProps} from './TableRow'

const TableContext = createContext<{
  storedRowStyle: CSSProperties,
  storedCellStyle: CSSProperties,
}>({
  storedRowStyle: {},
  storedCellStyle: {},
})

export type TableProps = React.FC<React.HTMLProps<HTMLTableElement> & {
  /**
   * Whether the table should take up the full width of its parent
   * @default false
   */
  fw?: boolean,

  /**
   * Whether the table should take up the full height of its parent
   * @default false
   */
  fh?: boolean,

  /**
   * Whether the table layout should be fixed
   * @default false
   */
  fixed?: boolean,

  /**
   * Style object for table rows
   */
  rowStyle?: CSSProperties,

  /**
   * Style object for table cells
   */
  cellStyle?: CSSProperties
  children: ReactElement<TableRowProps>[]
}>

/**
 * Table
 *
 * A simple and easy-to-use table component with a minimal design.
 *
 * @usage
 *
 * Table Component accepts TableRow Component as children only
 *
 * TableRow with head prop: recognized as a thead row
 *
 * TableRow without head prop: recognized as a tbody row
 *
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

const Table: TableProps = ({
                             children = [],
                             fw = true,
                             fh = true,
                             fixed = false,
                             style = {},
                             rowStyle = {},
                             cellStyle = {},
                             ...props
                           }) => {
  const filteredChildren: ReactNode[] = []

  Children.forEach(children, (child) => {
    if (child.type !== TableRow) {
      console.error(`<Table> only accepts <TableRow> as children. Found: <${child.type}>`)
      return
    }

    filteredChildren.push(child)
  })

  return <TableContext.Provider value={{
    // borderStyle,
    storedRowStyle: rowStyle,
    storedCellStyle: cellStyle,
  }}>
    <TableBase
      style={{
        width: fw ? '100%' : 'auto',
        height: fh ? '100%' : 'auto',
        borderCollapse: 'collapse',
        tableLayout: fixed ? 'fixed' : 'auto',
        ...style,
      }}
      {...props}
    >
      {filteredChildren}
    </TableBase>
  </TableContext.Provider>
}

export const useTableContext = () => useContext(TableContext)

export default Table