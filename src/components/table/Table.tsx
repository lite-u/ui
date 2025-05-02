import TableBase from './TableBase'
import {Children, createContext, CSSProperties, ReactNode, useContext} from 'react'
import TableRow from './TableRow'
import {useLiteUIContext} from '../../LiteUIProvider'

const TableContext = createContext<{
  storedRowStyle: CSSProperties,
  storedCellStyle: CSSProperties,
  storedRowHoveredStyle: CSSProperties,
}>({
  storedRowStyle: {},
  storedCellStyle: {},
  storedRowHoveredStyle: {},
})

export type TableProps = React.FC<React.HTMLProps<HTMLTableElement> & {
  /**
   * Render the table with extra small (`xs`) size styling.
   * @default false
   */
  xs?: boolean,
  /**
   * Render the table with small (`s`) size styling.
   * @default false
   */
  s?: boolean,
  /**
   * Render the table with medium (`s`) size styling.
   * @default false
   */
  m?: boolean,
  /**
   * Render the table with large (`l`) size styling.
   * @default true
   */
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
   * Whether the [tableLayout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) should be set to `fixed`
   * @default false
   */
  fixed?: boolean,
  /**
   * Convenience way to style all table rows
   *
   */
  rowStyle?: CSSProperties,
  /**
   * Convenience way to style Hovered body rows
   */
  rowHoverStyle?: CSSProperties,
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
 * Table accepts [TableRow](./tablerow) Component as children only
 *
 * @example
 *
 * import { Table, TableRow } from '@lite-u/ui'
 *
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
                             rowStyle = {},
                             rowHoverStyle = {},
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

  const storedRowHoveredStyle: CSSProperties = {
    backgroundColor: '#dfdfdf',
    ...rowHoverStyle,
  }

  const storedRowStyle: CSSProperties = {
    borderBottom: '1px solid #b5b5b5',
    color: '#292929',
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
    storedRowHoveredStyle,
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