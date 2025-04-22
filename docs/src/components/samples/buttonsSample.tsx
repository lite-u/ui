import Col from '@ui/components/layouts/Col.tsx'
import Title from '@ui/components/title/Title.tsx'
import {Button, Row} from '@ui/index.tsx'
import CodeBlock from '../codeBlock/codeBlock.tsx'

const ButtonPrimaryCode = `
<Button>default</Button>
<Button xs>xs</Button>
<Button s>small</Button>
<Button m>middle</Button>
<Button l>large</Button>
`

const ButtonsSample: React.FC<{ id: string }> = () => {
  return <Col id={'buttons'}>
    <Title h2>Buttons</Title>

    <Title h4>Primary</Title>
    <Row around
         w={300}
         style={{
           alignItems: 'end',
         }}>
      <Button>default</Button>
      <Button xs>xs</Button>
      <Button s>small</Button>
      <Button m>middle</Button>
      <Button l>large</Button>
    </Row>
    <Row>
      <CodeBlock code={ButtonPrimaryCode}/>
    </Row>
  </Col>
}

export default ButtonsSample