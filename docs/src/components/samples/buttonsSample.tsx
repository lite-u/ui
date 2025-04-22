import Col from '@ui/components/layouts/Col.tsx'
import Title from '@ui/components/title/Title.tsx'
import {Button, Row} from '@ui/index.tsx'
import CodeBlock from '../codeBlock/codeBlock.tsx'

const ButtonsSample: React.FC = () => {
  const wrapperWidth = 'auto'
  const blockMT = 50
  const buttonSizes = ['default', 'xs', 's', 'm', 'l']
  const buttonVars = ['default', 'primary', 'error', 'warn']

  return <Col id={'buttons'}>
    <Title h2 sticky>Buttons</Title>
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
  </Col>
}

export default ButtonsSample