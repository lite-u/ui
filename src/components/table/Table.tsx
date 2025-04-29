import TableBase from './TableBase'
import {createContext, CSSProperties, useContext} from 'react'

const TableContext = createContext<{
  storedRowStyle: CSSProperties,
  storedCellStyle: CSSProperties,
}>({
  storedRowStyle: {},
  storedCellStyle: {},
})

const Table: React.FC<React.HTMLProps<HTMLTableElement> & {
  fw?: boolean,
  fh?: boolean,
  /**
   * CSSProperties['tableLayout']
   */
  fixed?: boolean,
  // style?: CSSProperties
  rowStyle?: CSSProperties
  cellStyle?: CSSProperties
}> = ({
        children,
        fw = false,
        fh = true,
        fixed = false,
        style = {},
        rowStyle = {},
        cellStyle = {},
        ...props
      }) => {

  // const [storedRowStyle, setStoredRowStyle] = useState(rowStyle)
  // const [storedCellStyle, setStoredCellStyle] = useState(cellStyle)

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
      {children}
    </TableBase>
  </TableContext.Provider>
}

export const useTableContext = () => useContext(TableContext)

export default Table