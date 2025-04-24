import {Col, Panel, Row, Title} from '@ui/index.tsx'

const PanelSamples: React.FC = () => {
  return <Col id={'panel'}>
    <Title h2>Panel</Title>

    <Row w={200} around style={{
      alignItems: 'end',
    }}>

      <Panel title={'hello'}>
        hello
      </Panel>
    </Row>
  </Col>
}

export default PanelSamples