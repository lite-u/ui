import {Col, Con, P, Panel, Title} from '@ui/index.tsx'

const PanelSamples: React.FC = () => {
  return <Col  >

    <Con w={200} h={200}>
      <Panel title={'Title'}>
        <Con p={10}>
          <Col space={5}>
            <P>Panel content</P>
            <P>With</P>
            <P>Auto full height</P>
          </Col>
        </Con>
      </Panel>
    </Con>
  </Col>
}

export default PanelSamples