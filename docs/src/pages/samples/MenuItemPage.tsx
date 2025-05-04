import {Col, Con, MenuItem, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const MenuItemPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>
      <Con w={'auto'}>
        <UsageBlock title={'Titles'}>
          <Col>
            <MenuItem xs color={'red'}>XS size Menu Item </MenuItem>
            <MenuItem s color={'red'}>Small size Menu Item </MenuItem>
            <MenuItem color={'red'}>medium (default) Menu Item 1</MenuItem>
            <MenuItem l color={'red'}>Large Menu Item</MenuItem>
          </Col>
        </UsageBlock>
      </Con>
    </Row>
  </Col>
}

export default MenuItemPage