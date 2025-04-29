import {CSSProperties, ReactNode, useState} from 'react'

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
    ...extraRowStyle,
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
          <th key={index}>{child}</th> :
          <td key={index}>{child}</td>
      })
    }
  </tr>
}

export default TableRow