import {Button, Col, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'
import {ButtonProps} from '../../../../src'

const ButtonPage: React.FC = () => {
  const buttonSizes = ['xs', 's', 'm', 'l']
  // const buttonVars = ['primary', 'error', 'warn']

  // neutral
  return <Col id={'col'}>
    <Row space={10} mt={10} maxW={500} wrap>

      <Col maxW={260}>
        <SampleBlock title={'Neutral'}>
          <Row between end space={10}>
            {
              buttonSizes.map((size) => {
                const prop: Partial<ButtonProps> = {
                  [size]: true,
                }

                return <Button key={size} {...prop}>{size}</Button>
              })
            }
          </Row>
        </SampleBlock>
      </Col>

      <Col maxW={260}>
        <SampleBlock title={'Primary'}>
          <Row between end space={10}>
            {
              buttonSizes.map((size) => {
                const prop: Partial<ButtonProps> = {
                  [size]: true,
                }

                return <Button primary key={size} {...prop}>{size}</Button>
              })
            }
          </Row>
        </SampleBlock>
      </Col>

      <Col maxW={260}>
        <SampleBlock title={'Warn'}>
          <Row between end space={10}>
            {
              buttonSizes.map((size) => {
                const prop: Partial<ButtonProps> = {
                  [size]: true,
                }

                return <Button warn key={size} {...prop}>{size}</Button>
              })
            }
          </Row>
        </SampleBlock>
      </Col>

      <Col maxW={260}>
        <SampleBlock title={'Error'}>
          <Row between end space={10}>
            {
              buttonSizes.map((size) => {
                const prop: Partial<ButtonProps> = {
                  [size]: true,
                }

                return <Button error key={size} {...prop}>{size}</Button>
              })
            }
          </Row>
        </SampleBlock>
      </Col>

    </Row>
  </Col>
}

export default ButtonPage