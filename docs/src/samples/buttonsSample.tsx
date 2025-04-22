import Col from '@ui/components/layouts/Col.tsx'
import Title from '@ui/components/title/Title.tsx'
import {P} from '@ui/components/paragraph/Paragraph.tsx'
import {Button, Row} from '@ui/index.tsx'

const ButtonsSample: React.FC<{ id: string }> = () => {
  return <Col id={'buttons'}>
    <Title h2>Buttons</Title>

    <P>Primary</P>
    <Row w={200} around style={{
      alignItems: 'end',
    }}>
      <Button s>Primary</Button>
      <Button m>Primary</Button>
      <Button l>Primary</Button>
    </Row>
  </Col>
}

export default ButtonsSample