import {Col, Con, Menu, MenuItem, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const MenuPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={180}>
        <SampleBlock title={'Space 10'}>
          <Con border>
            <Menu space={10}>
              <MenuItem s>Copy</MenuItem>
              <MenuItem s>Paste</MenuItem>
              <MenuItem s>Cut</MenuItem>
              <MenuItem s>Duplicate</MenuItem>
              <MenuItem s>Delete</MenuItem>
              <MenuItem s>
                <Row between>
                  <span>More</span>
                  <span></span>
                </Row>
              </MenuItem>
            </Menu>
          </Con>
        </SampleBlock>
      </Con>

    </Row>

  </Col>
}

export default MenuPage