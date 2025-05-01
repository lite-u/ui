import {Col, Con, Flex, Row, Table, TableRow} from '@lite-u/ui'
import UsageBlock from '../UsageBlock'
import {NavLink} from 'react-router'

const TablePage: React.FC = () => {
  return <Col id={'col'}>
    <Row space={10} mt={10} wrap>
      <Flex col minH={260} w={200}>
        <UsageBlock title={'XS Size'} style={{flex: 1}}>
          <Table xs>
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
      </Flex>
    </Row>

    <Con mt={50} fz={16}>
      See also <NavLink to={'/components/tablerow'}>tablerow</NavLink>
    </Con>

  </Col>
}

export default TablePage