import {Con, IconButton, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const IconButtonsPage: React.FC = () => {

  return <Con>
    <Row center between>
      <Con w={250}>
        <SampleBlock title={'Neutral'}>
          <Row between center space={2}>
            <IconButton>D</IconButton>
            <IconButton xs>xs</IconButton>
            <IconButton s>s</IconButton>
            <IconButton m>M</IconButton>
            <IconButton l>L</IconButton>
          </Row>
        </SampleBlock>
      </Con>
    </Row>
  </Con>
}

export default IconButtonsPage