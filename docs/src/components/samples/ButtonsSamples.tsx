import Col from '@ui/components/layouts/Col.tsx'
import Title from '@ui/components/title/Title.tsx'
import {Button, Row} from '@ui/index.tsx'
import CodeWrap from '../codeBlock/CodeWrap.tsx'

const ButtonsSamples: React.FC = () => {
  const wrapperWidth = 'auto'
  const blockMT = 50
  const buttonSizes = ['default', 'xs', 's', 'm', 'l']
  const buttonVars = ['default', 'primary', 'error', 'warn']

  return <Col style={{marginTop: 50}}>
    {
      buttonVars.map(buttonVar => {
          let sampleCode = ''

          return <div key={buttonVar}>
            <Title h5 style={{marginTop: blockMT, fontWeight: 'normal'}}>{buttonVar}</Title>
            <Row between
                 end
                 space={10}
                 w={wrapperWidth}
                 style={{
                   marginBottom: 20,
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
              <CodeWrap code={sampleCode}/>
            </Row>

          </div>
        },
      )
    }
  </Col>
}

export default ButtonsSamples