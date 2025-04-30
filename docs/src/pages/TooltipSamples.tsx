import {Button, Con, Flex, Row, Tooltip} from '@ui/index.tsx'

const TooltipSamples: React.FC = () => {
  return <Con ml={100}>
    <Flex col w={300} h={200} justifyContent="space-around" alignItems="center">
      <Row between>
        <Tooltip position={'tl'} title={'hello world'}>
          <Button>tl</Button>
        </Tooltip>

        <Tooltip position={'t'}
                 bgColor={'green'}
                 color={'red'}
                 title={'helloworldhelloworldhello world'}>
          <Button>t</Button>
        </Tooltip>

        <Tooltip position={'tr'} title={'hello world'}>
          <Button>tr</Button>
        </Tooltip>
      </Row>

      <Row between>
        <Tooltip position={'l'} title={'hello world'}>
          <Button>l</Button>
        </Tooltip>

        <Con></Con>

        <Tooltip position={'r'} title={'hello world'}>
          <Button>r</Button>
        </Tooltip>
      </Row>

      <Row between>
        <Tooltip position={'bl'} title={'hello world'}>
          <Button>bl</Button>
        </Tooltip>

        <Tooltip position={'b'} title={'hello world'}>
          <Button>b</Button>
        </Tooltip>

        <Tooltip position={'br'} title={'hello world'}>
          <Button>br</Button>
        </Tooltip>
      </Row>

    </Flex>

    {/*<Con mb={1000}></Con>*/}
  </Con>
}

export default TooltipSamples