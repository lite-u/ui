import {Col, Con, Flex, Row, Table, TableRow} from '@lite-u/ui'
import UsageBlock from '../UsageBlock'
import {NavLink} from 'react-router'

const TablePage: React.FC = () => {
  return <Col id={'col'}>
    <Row space={10} mt={10} wrap>
      <Flex col minH={260} w={200}>
        <UsageBlock title={'XS Size'} style={{flex: 1}}>
          <Table xs fixed>
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

      <Flex col minH={260} w={200}>
        <UsageBlock title={'Small Size'} style={{flex: 1}}>
          <Table s>
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

      <Flex col minH={300} w={300}>
        <UsageBlock title={'Medium Size (default)'} style={{flex: 1}}>
          <Table m>
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

      <Flex col minH={300} w={300}>
        <UsageBlock title={'Large Size'} style={{flex: 1}}>
          <Table l>
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
      See also <NavLink to={'/components/tablerow'}>Table Row</NavLink>
    </Con>

  </Col>
}

export default TablePage