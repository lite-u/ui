import Col from '@ui/components/layouts/Col.tsx'
import Title from '@ui/components/title/Title.tsx'
import {P} from '@ui/components/paragraph/Paragraph.tsx'
import {Button, Row} from '@ui/index.tsx'

const InputsSample: React.FC<{ id: string }> = () => {
  return <Col id={'buttons'}>
    <Title h2>Input</Title>

    <P>Primary</P>
    <Row w={200} around style={{
      alignItems: 'end',
    }}>
      <Inputs s>Primary</Inputs>
      <Button m>Primary</Button>
      <Button l>Primary</Button>
    </Row>
  </Col>
}

export default InputsSample