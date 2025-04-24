import {Col, Con, Title} from '@ui/index.tsx'

const ConSamples: React.FC = () => {
  return <Col id={'con'}>
    <Title h2>O</Title>

    <Col between>
      <Con w={300} bg={'blue'} color={'white'}>
        <Con p={10}> Hello </Con>
        <Con p={20}> Hello </Con>
      </Con>
    </Col>
  </Col>
}

export default ConSamples