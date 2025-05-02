import {Col, Con, Link, MenuItem, Panel, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const PanelSamples: React.FC = () => {
  return <Col>

    <Row end space={10}>
      <Con w={300}>
        <UsageBlock title={'Link'}>
          <Panel xs mb={10} title={'Title'}>
            <Con>
              <p>Panel default</p>
            </Con>
          </Panel>
        </UsageBlock>
      </Con>

      <Con mt={20} w={300}>
        <UsageBlock title={'Wrapped by a MenuItem'}>
          <MenuItem>
            <Link target={'_blank'} href={`/components/link`}>
              Click Me To Open A Tab
            </Link>
          </MenuItem>
        </UsageBlock>
      </Con>
    </Row>

    <Con w={200}>
      <Panel mb={10} title={'Title'}>
        <Con>
          <p>Panel default</p>
        </Con>
      </Panel>

      <Panel mb={10} xs title={'Title'}>
        <Con>
          <p>Panel xs</p>
        </Con>
      </Panel>

      <Panel mb={10} sm title={'Title'}>
        <Con>
          <p>Panel sm</p>
        </Con>
      </Panel>

      <Panel mb={10} md title={'Title'}>
        <Con>
          <p>Panel md</p>
        </Con>
      </Panel>

      <Panel mb={10} lg title={'Title'}>
        <Con>
          <p>Panel lg</p>
        </Con>
      </Panel>


    </Con>
  </Col>
}

export default PanelSamples