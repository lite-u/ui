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

      <Flex col minH={300} w={300}>
        <UsageBlock title={'Custom Style Table'} style={{flex: 1}}>
          <Table s style={{border: '1px solid #dfdfdf'}}
                 rowStyle={{
                   backgroundColor: '#000',
                 }}
                 rowHoverStyle={{
                   backgroundColor: 'orange',
                 }}
                 cellStyle={{
                   color: '#fbefad',
                 }}>
            <TableRow head
                      style={{
                        backgroundColor: '#000',
                      }}>
              <span>brand</span>
              <span>price</span>
            </TableRow>

            {
              Array.from({length: 10}).map((_, i) => {
                return <TableRow key={i}
                                 style={{backgroundColor: i % 2 ? '#000' : '#06852f'}}>
                  <span>{i % 2 ? 'Nike' : 'Puma'}</span>
                  <span>{i + 1000}<i>$</i></span>

                </TableRow>
              })
            }

            {/*
            <TableRow> <span>Puma</span> <span>1970</span> </TableRow>
            <TableRow style={{
              backgroundColor: '#000',
            }}>
              <span>Nike</span>
              <span>1970</span>
            </TableRow>
            <TableRow style={{
              backgroundColor: '#06852f',
            }}>
              <span>Nike</span>
              <span>1970</span>
            </TableRow>*/}
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