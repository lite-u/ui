import {Button, Col, Input, P, Row, Title} from '@ui/index.tsx'

const InputsSample: React.FC<{ id: string }> = () => {
  return <Col id={'buttons'}>
    <Title h2>Input</Title>

    <P>Primary</P>
    <Row w={200} around style={{
      alignItems: 'end',
    }}>
      <Input s/>
      <Button m>Primary</Button>
      <Button l>Primary</Button>
    </Row>
  </Col>
}

export default InputsSample