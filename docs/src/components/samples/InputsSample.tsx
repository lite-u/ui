import {Col, Input, P, Row, Title} from '@ui/index.tsx'

const InputsSample: React.FC = () => {
  return <Col id={'inputs'}>
    <Title h2>Inputs</Title>

    <Title h4>Primary</Title>
    <Row w={200} around style={{
      alignItems: 'end',
    }}>
      <Input s/>
    </Row>
  </Col>
}

export default InputsSample