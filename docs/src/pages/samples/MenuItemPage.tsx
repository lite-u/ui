import {Col, Con, MenuItem, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const MenuItemPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>
      <Con w={'auto'}>
        <SampleBlock title={'Titles'}>
          <Col>
            <MenuItem xs color={'red'}>XS size Menu Item </MenuItem>
            <MenuItem s color={'red'}>Small size Menu Item </MenuItem>
            <MenuItem color={'red'}>medium size Menu Item</MenuItem>
            <MenuItem l color={'red'}>Large size Menu Item</MenuItem>
          </Col>
        </SampleBlock>
      </Con>
    </Row>
  </Col>
}

export default MenuItemPage