import {Col, Con, MenuItem, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const MenuItemPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>
      <Con w={'auto'}>
        <SampleBlock title={'Sizes'}>
          <Col>
            <MenuItem xs>XS size Menu Item </MenuItem>
            <MenuItem s>Small size Menu Item </MenuItem>
            <MenuItem>medium size Menu Item</MenuItem>
            <MenuItem l>Large size Menu Item</MenuItem>
          </Col>
        </SampleBlock>
      </Con>
    </Row>
  </Col>
}

export default MenuItemPage