import {Col, Con, Flex, P, Row, Table, TableRow} from '@lite-u/ui'
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
          <Table xs fixed
                 style={{
                   borderCollapse: 'collapse',
                   border: '1px solid #dfdfdf',
                 }}
                 rowHoverStyle={{
                   backgroundColor: 'orange',
                 }}
                 cellStyle={{
                   padding: 0,
                   border: '1px solid #ff0000',
                 }}>
            <TableRow head
                      style={{
                        fontSize: 16,
                        color: '#fff',
                        backgroundColor: '#1c285a',
                      }}>
              <span style={{padding: 10}}>brand</span>
              <span>price</span>
            </TableRow>
            {
              Array.from({length: 10}).map((_, i) => {
                return <TableRow key={i}
                                 style={{color: '#fff', backgroundColor: i % 2 ? '#000' : '#06852f'}}>
                  <span>{i % 2 ? 'Nike' : 'Puma'}</span>
                  <span>{i + 1000}<i>$</i></span>
                </TableRow>
              })
            }
          </Table>
        </UsageBlock>
      </Flex>
    </Row>

    <Flex col mt={30} minH={300} w={300}>
      <UsageBlock title={'Custom Style Table 2'} style={{flex: 1}}>
        <Table xs fixed
               style={{
                 borderCollapse: 'collapse',
                 border: '1px solid orange',
               }}
               rowStyle={{
                 backgroundColor: "#8361ea",
               }}
               rowHoverStyle={{
                 backgroundColor: 'orange',
                 color: 'green',
               }}
               cellStyle={{
                 padding: 0,
                 border: '1px solid #ff0000',
               }}>
          <TableRow head
                    style={{
                      fontSize: 16,
                      color: '#fff',
                      backgroundColor: '#1c285a',
                    }}>
            <span style={{padding: 10}}>brand</span>
            <span>price</span>
          </TableRow>

          <TableRow style={{color: '#fff', backgroundColor: '#06852f'}}>
            <span style={{backgroundColor: 'red', color: 'blue', padding: 20}}>Nike</span>
            <span>1970</span>
          </TableRow>
          <TableRow>
            <span>Nike</span>
            <span>1970</span>
          </TableRow>
        </Table>
      </UsageBlock>
    </Flex>


    <Con mt={50} fz={16}>
      See also <NavLink to={'/components/tablerow'}>Table Row</NavLink>
    </Con>

  </Col>
}

export default TablePage