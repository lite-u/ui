import {Col, Con, Menu, MenuItem, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const MenuPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <UsageBlock title={'Titles'}>
          <Col between>
            <Menu space={12}>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
            </Menu>
          </Col>
        </UsageBlock>
      </Con>

    </Row>

  </Col>
}

export default MenuPage