import {Button, Col, Con, Row, Tooltip} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const TooltipPage: React.FC = () => {
  return <Con>
    <Con w={300}>
      <SampleBlock title={'Placements'}>
        <Col stretch between h={300}>
          <Row between>
            <Tooltip placement={'tl'} title={'hello world'}>
              <Button>tl</Button>
            </Tooltip>

            <Tooltip placement={'t'}
                     bgColor={'green'}
                     color={'red'}
                     title={'helloworldhelloworldhello world'}>
              <Button>t</Button>
            </Tooltip>

            <Tooltip placement={'tr'} title={'hello world'}>
              <Button>tr</Button>
            </Tooltip>
          </Row>

          <Row between>
            <Tooltip placement={'l'} title={'hello world'}>
              <Button>l</Button>
            </Tooltip>

            <Con></Con>

            <Tooltip placement={'r'} title={'hello world'}>
              <Button>r</Button>
            </Tooltip>
          </Row>

          <Row between>
            <Tooltip placement={'bl'} title={'hello world'}>
              <Button>bl</Button>
            </Tooltip>

            <Tooltip placement={'b'} title={'hello world'}>
              <Button>b</Button>
            </Tooltip>

            <Tooltip placement={'br'} title={'hello world'}>
              <Button>br</Button>
            </Tooltip>
          </Row>
        </Col>
      </SampleBlock>

    </Con>
  </Con>
}

export default TooltipPage