import {Col, Con, Flex, Row, Table, TableRow} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'
import {NavLink} from 'react-router'

const TableRowPage: React.FC = () => {
  return <Col id={'col'}>
    <Row space={10} mt={10} start wrap>
      <Flex col minH={260} w={200}>
        <SampleBlock title={'XS Size'} style={{flex: 1}}>
          <Table xs>
            <TableRow head>
              <h1>name</h1>
              <h2>age</h2>
            </TableRow>
            <TableRow>
              <div>Puma</div>
              <p>1970</p>
            </TableRow>
            <TableRow>
              <span>Nike</span>
              <span>1970</span>
            </TableRow>
          </Table>
        </SampleBlock>
      </Flex>
    </Row>

    <Con mt={50} fz={16}>
      See also <NavLink to={'/components/table'}>Table</NavLink>
    </Con>

  </Col>
}

export default TableRowPage