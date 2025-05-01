import {Col, Con, Table, TableRow} from '@lite-u/ui'
import UsageBlock from '../UsageBlock'

const TablePage: React.FC = () => {
  return <Col id={'col'}>
    <Con>
      <Con w={300} style={{
        // margin: '0 auto',
      }}>
        <UsageBlock title={'Minimal Usage'}>
          <Table>
            <TableRow head>
              <span>name</span>
              <span>age</span>
            </TableRow>
            <TableRow>
              <span>Puma</span>
              <span>1970</span>
            </TableRow>
            <TableRow>
              <span>Nike</span>
              <span>1970</span>
            </TableRow>
          </Table>
        </UsageBlock>
      </Con>
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

export default TablePage