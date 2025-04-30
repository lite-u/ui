import {Col, Con, Table, TableRow} from '@lite-u/ui'

const TableSamples: React.FC = () => {
  return <Col id={'col'}>
    <Con w={400}>
      <Table fw fh fixed>
        <TableRow head>
          <span>name</span>
          <span>age</span>
          <span>birth</span>
        </TableRow>
        <TableRow>
          <p style={{
            width: 100,
            // overflow: 'auto',
            textAlign: 'center',
            wordWrap: 'break-word',
            whiteSpace: 'wrap',
          }}>AndyAndyAndyAndyAndyAndyAndyAndy</p>
          <span>28</span>
          <span>1970</span>
        </TableRow>
        <TableRow>
          <span>Andy</span>
          <span>28</span>
          <span>1970</span>
        </TableRow>
        <TableRow>
          <span>Andy</span>
          <span>28</span>
          <span>1970</span>
        </TableRow>
        <TableRow>
          <span>Andy</span>
          <span>28</span>
          <span>1970</span>
        </TableRow>
        <TableRow>
          <span>Andy</span>
          <span>28</span>
          <span>1970</span>
        </TableRow>
        <TableRow>
          <span>Andy</span>
          <span>28</span>
          <span>1970</span>
        </TableRow>
      </Table>
    </Con>
  </Col>
}

export default TableSamples