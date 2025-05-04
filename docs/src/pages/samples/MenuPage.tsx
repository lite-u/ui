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
              <MenuItem s>
                <Con style={{position: 'relative'}}>
                  <Row between>
                    <span>More</span>
                    <span>R</span>
                  </Row>
                  <Con abs>
                    <Menu space={0}>
                      <MenuItem s>Copy</MenuItem>
                      <MenuItem s>Paste</MenuItem>
                      <MenuItem s>Cut</MenuItem>
                      <MenuItem s>Duplicate</MenuItem>
                      <MenuItem s>Delete</MenuItem>
                      <MenuItem s>
                        <Row between>
                          <span>More</span>
                          <span>R</span>
                        </Row>

                      </MenuItem>
                    </Menu>
                  </Con></Con>
              </MenuItem>
            </Menu>
          </Con>
        </SampleBlock>
      </Con>

    </Row>

  </Col>
}

export default MenuPage