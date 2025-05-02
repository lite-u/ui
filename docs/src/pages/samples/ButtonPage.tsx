import {Button, Col, Con, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock'
import {ButtonProps} from '../../../../src'

const ButtonPage: React.FC = () => {
  const buttonSizes = ['xs', 's', 'm', 'l']
  // const buttonVars = ['primary', 'error', 'warn']

  // neutral
  return <Col id={'col'}>
    <Row space={10} mt={10} maxW={800} wrap>

      <Con w={'auto'}>
        <UsageBlock title={'Neutral'}>
          <Row between end space={2}>
            {
              buttonSizes.map((size) => {
                const prop: Partial<ButtonProps> = {
                  [size]: true,
                }

                return <Button key={size} {...prop}>{size}</Button>
              })
            }
          </Row>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'Primary'}>
          <Row between end space={2}>
            {
              buttonSizes.map((size) => {
                const prop: Partial<ButtonProps> = {
                  [size]: true,
                }

                return <Button primary key={size} {...prop}>{size}</Button>
              })
            }
          </Row>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'Warn'}>
          <Row between end space={2}>
            {
              buttonSizes.map((size) => {
                const prop: Partial<ButtonProps> = {
                  [size]: true,
                }

                return <Button warn key={size} {...prop}>{size}</Button>
              })
            }
          </Row>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'Error'}>
          <Row between end space={2}>
            {
              buttonSizes.map((size) => {
                const prop: Partial<ButtonProps> = {
                  [size]: true,
                }

                return <Button error key={size} {...prop}>{size}</Button>
              })
            }
          </Row>
        </UsageBlock>
      </Con>

    </Row>

    {/*
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
    </Col>*/}
    {/*    <Con mt={50} fz={16}>
      See also <NavLink to={'/components/table#description'}>table</NavLink>
    </Con>*/}

  </Col>
}

export default ButtonPage