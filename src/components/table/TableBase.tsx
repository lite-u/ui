import {ReactNode} from 'react'

const TableBase: React.FC<React.HTMLProps<HTMLTableElement> & {
  children: ReactNode,
}> = ({
        children,
        ...props
      }) => {
  let tHead = undefined
  let tBody: ReactNode[] = []

  if (Array.isArray(children)) {
    children.forEach(child => {
      if (child.props && child.props.head) {
        tHead = child
      } else {
        tBody.push(child)
      }
    })
  } else {
    tHead = children
  }

  return <table {...props}>
    <thead>{tHead}</thead>
    <tbody>{tBody}</tbody>
  </table>
}

export default TableBase