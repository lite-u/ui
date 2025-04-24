import {Col, Con, Panel, Title} from '@ui/index.tsx'

const PanelSamples: React.FC = () => {
  return <Col id={'panel'}>
    <Title h2>Panel</Title>

    <Con w={200} h={200}>
      <Panel title={'hello'}>
        hello
      </Panel>
    </Con>
  </Col>
}

export default PanelSamples