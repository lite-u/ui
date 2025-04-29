import TableBase from './TableBase'

const Table: React.FC<React.HTMLProps<HTMLTableElement> & {
  fw?: boolean,
  fh?: boolean,
  /**
   * CSSProperties['tableLayout']
   */
  fixed?: boolean,
  style?: {}
}> = ({
        children,
        fw = false,
        fh = true,
        fixed = false,
        style = {},
        ...props
      }) => {

  return <TableBase
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
}

export default Table