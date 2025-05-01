import {CSSProperties, ReactNode, useState} from 'react'
import {useTableContext} from './Table'

const TableRow: React.FC<React.HTMLProps<HTMLTableRowElement> & {
  children: ReactNode[],
  head?: boolean,
  style?: {}
}> = ({
        children,
        head = false,
        style = {},
        onMouseEnter,
        onMouseLeave,
        ...props
      }) => {
  const [extraRowStyle, setExtraRowStyle] = useState<CSSProperties>({})
  const {storedRowStyle, storedCellStyle} = useTableContext()

  const handleMouseEnter = () => {
    if (!head) {
      setExtraRowStyle({
        backgroundColor: '#dfdfdf',
        // color: '#fff',
      })
    }
  }
  const handleMouseLeave = () => {
    setExtraRowStyle({})
  }

  let nodes: ReactNode[] = []

  if (Array.isArray(children)) {
    nodes = children
  } else {
    nodes.push(children)
  }

  const rowStyle = {
    borderBottom: '1px solid #b5b5b5',
    color: '#292929',
    ...storedRowStyle,
    ...extraRowStyle,
  }

  const cellStyle = {
    padding: '10px 0',
    // border: '1px solid #b5b5b5',
    ...storedCellStyle,
  }

  const cellDivStyle = {
    display: 'inline-flex',
    justifyContent: 'center',
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