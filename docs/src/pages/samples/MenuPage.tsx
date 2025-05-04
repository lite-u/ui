import {Col, Con, Menu, MenuItem, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const MenuPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <SampleBlock title={'Titles'}>
          <Col between>
            <Menu space={12}>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
            </Menu>
          </Col>
        </SampleBlock>
      </Con>

    </Row>

  </Col>
}

export default MenuPage