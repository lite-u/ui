import {Collapse, Con, Menu, MenuItem, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const CollapsePage: React.FC = () => {
  return <Con>
    <Con w={300}>
      <SampleBlock title={'Placements'}>
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

    </Con>
  </Con>
}

export default CollapsePage