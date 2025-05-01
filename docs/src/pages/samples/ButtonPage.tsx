import {Button, Col, Con, Row, Title} from '@lite-u/ui'
import UsageBlock from '../UsageBlock'
import CodeWrap from '../../components/codeBlock/CodeWrap.tsx'

const ButtonPage: React.FC = () => {
  const wrapperWidth = 'auto'
  const blockMT = 50
  const buttonSizes = ['default', 'xs', 's', 'm', 'l']
  const buttonVars = ['default', 'primary', 'error', 'warn']

  // neutral
  return <Col id={'col'}>
    <Row space={10} mt={10} wrap>

      <Con minH={200} w={400}>
        <UsageBlock title={'XS Size'} style={{flex: 1}}>
          <Row between>
            {
              buttonSizes.map((size) => {
                const text = size || 'default'

                return <Button key={size}>{text}</Button>
              })
            }
          </Row>
        </UsageBlock>
      </Con>

    </Row>


    <Col mt={50}>
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

                    if (buttonVar !== 'default' || size !== 'default') {
                      // @ts-ignore
                      props[buttonVar] = true
                      // @ts-ignore
                      props[size] = true
                    }

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
    {/*    <Con mt={50} fz={16}>
      See also <NavLink to={'/components/table#description'}>table</NavLink>
    </Con>*/}

  </Col>
}

export default ButtonPage