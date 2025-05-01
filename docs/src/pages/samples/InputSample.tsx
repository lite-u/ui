import {Col, Con, Input, P, Row, Title} from '@lite-u/ui'

const InputSample: React.FC = () => {
  return <Col>
    <Title h4>Primary</Title>

    <Con w={600}>
      <P>Small</P>
      <Row space={6}>
        <Input s/>
        <Input warn s/>
        <Input error s/>
      </Row>

      <P>Medium</P>

      <Row space={6}>
        <Input m/>
        <Input warn m/>
        <Input error m/>
      </Row>

      <P>Large</P>

      <Row space={6}>
        <Input l/>
        <Input warn l/>
        <Input error l/>
      </Row>
    </Con>

    <Con>
      <P>Number</P>

      <Row space={6}>
        <Input step={0.1} placeholder={'hello'} number/>
        <Input step={0.1} number warn/>
        <Input number error/>
      </Row>
    </Con>

  </Col>
}

export default InputSample