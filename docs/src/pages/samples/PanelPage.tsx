import {Col, Con, Panel, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const PanelPage: React.FC = () => {
  return <Col>
    <Row space={10} wrap>

      <Con w={200}>
        <SampleBlock title={'xs'}>
          <Panel xs mb={10} title={'Title'}>
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </Panel>
        </SampleBlock>
      </Con>


      <Con w={200}>
        <SampleBlock title={'Small'}>
          <Panel s mb={10} title={'Title'}>
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </Panel>
        </SampleBlock>
      </Con>

      <Con w={200}>
        <SampleBlock title={'Medium'}>
          <Panel mb={10} title={'Title'}>
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </Panel>
        </SampleBlock>
      </Con>

      <Con w={200}>
        <SampleBlock title={'Large'}>
          <Panel l mb={10} title={'Title'}>
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </Panel>
        </SampleBlock>
      </Con>
    </Row>
  </Col>
}

export default PanelPage