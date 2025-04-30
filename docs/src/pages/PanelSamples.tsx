import {Col, Con, Panel} from '@ui/index.tsx'

const PanelSamples: React.FC = () => {
  return <Col>
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