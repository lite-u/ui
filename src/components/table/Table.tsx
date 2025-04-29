import TableBase from './TableBase'

const Table: React.FC<React.HTMLProps<HTMLTableElement> & {
  fw?: boolean,
  fh?: boolean,
  style?: {}
}> = ({
        children,
        fw = false,
        fh = true,
        style = {},
        ...props
      }) => {

  return <TableBase
    style={{
      width: fw ? '100%' : 'auto',
      height: fh ? '100%' : 'auto',
      borderCollapse: 'collapse',
      ...style,
    }}
    {...props}
  >
    {children}
  </TableBase>
}

export default Table