import {Col, Con, Panel, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const PanelPage: React.FC = () => {
  return <Col>
    <Row space={10} wrap>

      <Con w={200}>
        <UsageBlock title={'xs'}>
          <Panel xs mb={10} title={'Title'}>
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </Panel>
        </UsageBlock>
      </Con>


      <Con w={200}>
        <UsageBlock title={'Small'}>
          <Panel s mb={10} title={'Title'}>
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </Panel>
        </UsageBlock>
      </Con>

      <Con w={200}>
        <UsageBlock title={'Medium'}>
          <Panel mb={10} title={'Title'}>
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </Panel>
        </UsageBlock>
      </Con>

      <Con w={200}>
        <UsageBlock title={'Large'}>
          <Panel l mb={10} title={'Title'}>
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </Panel>
        </UsageBlock>
      </Con>
    </Row>
  </Col>
}

export default PanelPage