import {Col, Con, Menu, MenuItem, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const MenuPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con>
        <SampleBlock title={'Titles'}>
          <Con w={120} border>
            <Menu space={0}>
              <MenuItem s>Copy</MenuItem>
              <MenuItem s>Paste</MenuItem>
              <MenuItem s>Cut</MenuItem>
              <MenuItem s>Duplicate</MenuItem>
              <MenuItem s>Delete</MenuItem>
            </Menu>
          </Con>
        </SampleBlock>
      </Con>

    </Row>

  </Col>
}

export default MenuPage