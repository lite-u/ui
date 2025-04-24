import {Col, Con, Row, Title} from '@ui/index.tsx'
import CodeWrap from '../codeBlock/CodeWrap.tsx'

const ConSamples: React.FC = () => {
  return <Col id={'con'}>
    <Title h2>Con Container</Title>

    <Col between>
      <Con w={300} m={'10px 0'} bg={'#ff7411'} color={'white'}>
        <Con p={10}> Hello </Con>
        <Con p={20}> Hello </Con>
      </Con>
    </Col>

    <Row>
      <CodeWrap code={`
        <Col between>
          <Con w={300} m={'10px 0'} bg={'#ff7411'} color={'white'}>
            <Con p={10}> Hello </Con>
            <Con p={20}> Hello </Con>
          </Con>
        </Col>      
        `}/>
    </Row>
  </Col>
}

export default ConSamples