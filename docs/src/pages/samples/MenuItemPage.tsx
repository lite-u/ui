import {Col, Con, MenuItem, Row, Title} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const MenuItemPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <UsageBlock title={'Titles'}>
          <Col between>
            <MenuItem h1 color={'red'} sticky style={{zIndex:100}}>h1</MenuItem>
          </Col>
        </UsageBlock>
      </Con>

    </Row>
  </Col>
}

export default MenuItemPage