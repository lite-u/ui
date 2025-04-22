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
const sampleLabel = (strings: TemplateStringsArray) => {
  const var0 = strings[0]
  const var1 = strings[1]
  console.log(strings)
  return `<Button ${var0} ${var1}></Button>\n`
}

const ButtonsSample: React.FC<{ id: string }> = () => {
  const wrapperWidth = 'auto'
  const blockMT = 50
  const buttonSizes = ['default', 'xs', 's', 'm', 'l']
  const buttonVars = ['default', 'primary', 'error', 'warn']

  return <Col id={'buttons'}>
    <Title h2>Buttons</Title>
    {
      buttonVars.map(buttonVar => {
          let sampleCode = ''

          return <div key={buttonVar}>
            <Title h4 style={{marginTop: blockMT}}>{buttonVar}</Title>
            <Row between
                 w={wrapperWidth}
                 style={{
                   alignItems: 'end',
                   display: 'inline-flex',
                   gap: 8,
                 }}>
              {
                buttonSizes.map((size) => {
                  const props = {}
                  const text = size || 'default'
                  const d = []
                  let str = ''
                  if (buttonVar !== 'default' || size !== 'default') {
                    // @ts-ignore
                    props[buttonVar] = true
                    // @ts-ignore
                    props[size] = true

                    if (buttonVar !== 'default') {
                      d.push(buttonVar)
                    }
                    if (size !== 'default') {
                      d.push(size)
                    }
                  }

                  if (d.length) {
                    str = ' ' + d.join(' ')
                  }
                  sampleCode += `<Button${str}>${text}</Button>\n`

                  return <Button key={size} {...props}>{text}</Button>
                })}
            </Row>

            <Row>
              <CodeBlock code={sampleCode}/>
            </Row>

          </div>
        },
      )
    }
    {/*

    <Title h4 style={{marginTop: blockMT}}>Default</Title>
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

    <Title h4 style={{marginTop: blockMT}}>Primary</Title>
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

    <Title h4 style={{marginTop: blockMT}}>Error</Title>
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

    <Title h4 style={{marginTop: blockMT}}>Warn</Title>
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
*/}

    {/*<Row>
      <CodeBlock code={ButtonPrimaryCode}/>
    </Row>*/}
  </Col>
}

export default ButtonsSample