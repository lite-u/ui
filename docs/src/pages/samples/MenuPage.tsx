import {Col, Con, Menu, MenuItem, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const MenuPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={200}>
        <SampleBlock title={'Titles'}>
          <Col between>
            <Menu space={4}>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
            </Menu>
          </Col>
        </SampleBlock>
      </Con>

    </Row>

  </Col>
}

export default MenuPage