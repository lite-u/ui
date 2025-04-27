import {Col, Con, P, Panel} from '@ui/index.tsx'

const PanelSamples: React.FC = () => {
  return <Col>
    <Con w={200}>
      <Panel mb={10} title={'Title'}>
        <Con p={10}>
          <P>Panel md : default</P>
        </Con>
      </Panel>

      <Panel mb={10} xs title={'Title'}>
        <Con p={10}>
          <P>Panel xs</P>
        </Con>
      </Panel>

      <Panel mb={10} sm title={'Title'}>
        <Con p={10}>
          <P>Panel sm</P>
        </Con>
      </Panel>

      <Panel mb={10} md title={'Title'}>
        <Con p={10}>
          <P>Panel md</P>
        </Con>
      </Panel>

      <Panel mb={10} lg title={'Title'}>
        <Con p={10}>
          <P>Panel lg</P>
        </Con>
      </Panel>


    </Con>
  </Col>
}

export default PanelSamples