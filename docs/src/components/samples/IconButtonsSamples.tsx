import {Con, IconButton, Row} from '@ui/index.tsx'

const IconButtonsSamples: React.FC = () => {

  return <Con>
    <Row w={200} center between>
      <IconButton>D</IconButton>
      <IconButton xs>xs</IconButton>
      <IconButton s>s</IconButton>
      <IconButton m>M</IconButton>
      <IconButton l>L</IconButton>
    </Row>
  </Con>
}

export default IconButtonsSamples