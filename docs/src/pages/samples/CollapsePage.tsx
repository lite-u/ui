import {Collapse, Con, Menu, MenuItem, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const CollapsePage: React.FC = () => {
  return <Con>
    <Con w={300}>
      <Row between space={10}>
        <SampleBlock title={'Default Opened'}>
          <Con w={200}>
            <Row between border>
              <Collapse head={<MenuItem hoverStyle={{backgroundColor: '#aa7474', color: 'orange'}} style={{backgroundColor: '#aa7474', color: '#fff'}}>toggle</MenuItem>}>
                <Menu>
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                  <MenuItem>4</MenuItem>
                  <MenuItem>5</MenuItem>
                </Menu>
              </Collapse>
            </Row>
          </Con>
        </SampleBlock>

        <SampleBlock title={'Toggle'}>
          <Con w={200}>
            <Row between border>
              <Collapse open={false} head={<MenuItem>toggle</MenuItem>}>
                <Menu>
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                  <MenuItem>4</MenuItem>
                  <MenuItem>5</MenuItem>
                </Menu>
              </Collapse>
            </Row>
          </Con>
        </SampleBlock>
      </Row>
    </Con>
  </Con>
}

export default CollapsePage