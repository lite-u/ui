import Col from '@ui/components/layouts/Col.tsx'
import Title from '@ui/components/title/Title.tsx'
import {Button, Row} from '@ui/index.tsx'

const ButtonPrimaryCode = `
<Button>default</Button>
<Button xs>xs</Button>
<Button s>small</Button>
<Button m>middle</Button>
<Button l>large</Button>
`

const ButtonsSample: React.FC<{ id: string }> = () => {
  const wrapperWidth = 360
  return <Col id={'buttons'}>
    <Title h2>Buttons</Title>


    <Title h4>Default</Title>
    <Row between
         w={wrapperWidth}
         style={{
           alignItems: 'end',
         }}>
      <Button xs>xs</Button>
      <Button s>small</Button>
      <Button m>middle</Button>
      <Button l>large</Button>
      <Button>default</Button>
    </Row>

    <Title h4>Primary</Title>
    <Row between
         w={wrapperWidth}
         style={{
           alignItems: 'end',
         }}>
      <Button primary xs>xs</Button>
      <Button primary s>small</Button>
      <Button primary m>middle</Button>
      <Button primary l>large</Button>
      <Button primary>default</Button>
    </Row>

    <Title h4>Error</Title>
    <Row between
         w={wrapperWidth}
         style={{
           alignItems: 'end',
         }}>
      <Button error xs>xs</Button>
      <Button error s>small</Button>
      <Button error m>middle</Button>
      <Button error l>large</Button>
      <Button error>default</Button>
    </Row>

    <Title h4>Warn</Title>
    <Row between
         w={wrapperWidth}
         style={{
           alignItems: 'end',
         }}>
      <Button warn xs>xs</Button>
      <Button warn s>small</Button>
      <Button warn m>middle</Button>
      <Button warn l>large</Button>
      <Button warn>default</Button>
    </Row>

    {/*<Row>
      <CodeBlock code={ButtonPrimaryCode}/>
    </Row>*/}
  </Col>
}

export default ButtonsSample