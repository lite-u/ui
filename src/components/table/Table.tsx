import TableBase from './TableBase'
import {Children, createContext, CSSProperties, ReactNode, useContext} from 'react'
import TableRow from './TableRow'
import {useLiteUIContext} from '../../LiteUIProvider'

const TableContext = createContext<{
  storedRowStyle: CSSProperties,
  storedCellStyle: CSSProperties,
}>({
  storedRowStyle: {},
  storedCellStyle: {},
})

export type TableProps = React.FC<React.HTMLProps<HTMLTableElement> & {
  xs?: boolean,
  s?: boolean,
  m?: boolean,
  l?: boolean,

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
  children: ReactNode
}>

/**
 * Table
 *
 * @brief
 * A simple and easy-to-use table component with a minimal design.
 *
 * @intro
 *
 * Table accepts [TableRow](./tablerow) Component as children only
 *
 * <TableRow> with head prop: recognized as a thead row
 *
 * <TableRow> without head prop: recognized as a tbody row
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
                             xs,
                             s,
                             m = true,
                             l,
                             fw = true,
                             fh = false,
                             fixed = false,
                             style = {},
                             rowStyle = {
                               borderBottom: '1px solid #b5b5b5',
                               color: '#292929',
                             },
                             cellStyle = {},
                             ...props
                           }) => {
  const {theme} = useLiteUIContext()
  // console.log(theme.)
  const filteredChildren: ReactNode[] = []

  Children.forEach(children, (child) => {
    // @ts-ignore
    if (child.type !== TableRow) {
      // @ts-ignore
      console.error(`<Table> only accepts <TableRow> as children. Found: <${child.type}>`)
      return
    }

    filteredChildren.push(child)
  })

  const tableStyle: CSSProperties = {
    width: fw ? '100%' : 'auto',
    height: fh ? '100%' : 'auto',
    borderCollapse: 'collapse',
    tableLayout: fixed ? 'fixed' : 'auto',
  }

  const sizedCellStyle: CSSProperties = {}
  const sizedRowStyle: CSSProperties = {}

  if (m) {
    tableStyle.fontSize = theme.fontSizes.md
    sizedRowStyle.height = theme.table.row.md.height
    sizedCellStyle.padding = `${theme.padding.md.y}px ${theme.padding.md.x}px`
  }

  if (xs) {
    tableStyle.fontSize = theme.fontSizes.xs
    sizedRowStyle.height = theme.table.row.xs.height
    sizedCellStyle.padding = `${theme.padding.xs.y}px ${theme.padding.xs.x}px`
  }

  if (s) {
    tableStyle.fontSize = theme.fontSizes.sm
    sizedRowStyle.height = theme.table.row.sm.height
    sizedCellStyle.padding = `${theme.padding.sm.y}px ${theme.padding.sm.x}px`
  }

  if (l) {
    tableStyle.fontSize = theme.fontSizes.lg
    sizedRowStyle.height = theme.table.row.lg.height
    sizedCellStyle.padding = `${theme.padding.lg.y}px ${theme.padding.lg.x}px`
  }

  const storedRowStyle: CSSProperties = {
    ...sizedRowStyle,
    ...rowStyle,
  }

  const storedCellStyle: CSSProperties = {
    ...sizedCellStyle,
    ...cellStyle,
  }

  return <TableContext.Provider value={{
    storedRowStyle,
    storedCellStyle,
  }}>
    <TableBase
      style={{...tableStyle, ...style}}
      {...props}
    >
      {filteredChildren}
    </TableBase>
  </TableContext.Provider>
}

export const useTableContext = () => useContext(TableContext)

export default Table