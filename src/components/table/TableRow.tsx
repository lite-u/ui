import {Children, CSSProperties, ReactNode, useState} from 'react'
import {useTableContext} from './Table'

export type TableRowProps = React.FC<React.HTMLProps<HTMLTableRowElement> & {
  children: ReactNode,
  head?: boolean,
  style?: {}
}>

const TableRow: TableRowProps = ({
                                   children,
                                   head = false,
                                   style = {},
                                   onMouseEnter,
                                   onMouseLeave,
                                   ...props
                                 }) => {
  const [bodyRowStyle, setBodyRowStyle] = useState<CSSProperties>({})
  const {storedRowStyle, storedCellStyle} = useTableContext()

  const handleMouseEnter = () => {
    if (!head) {
      setBodyRowStyle({
        backgroundColor: '#dfdfdf',
      })
    }
  }

  const handleMouseLeave = () => {
    setBodyRowStyle({})
  }

  let nodes: ReactNode[] = Children.toArray(children)

  const rowStyle = {
    ...storedRowStyle,
    ...bodyRowStyle,
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
      height: 40,
      ...rowStyle,
      ...style,
    }} {...props}>
    {
      nodes?.map((child, index) => {
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