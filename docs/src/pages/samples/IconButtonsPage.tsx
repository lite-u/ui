import {Con, IconButton, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const IconButtonsPage: React.FC = () => {

  return <Con>
    <Row center between>
      <Con w={450}>
        <UsageBlock title={'Neutral'}>
          <Row between center space={2}>
            <IconButton>D</IconButton>
            <IconButton xs>xs</IconButton>
            <IconButton s>s</IconButton>
            <IconButton m>M</IconButton>
            <IconButton l>L</IconButton>
          </Row>
        </UsageBlock>
      </Con>
    </Row>
  </Con>
}

export default IconButtonsPage