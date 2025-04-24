import {Col, Con, Row, Title} from '@ui/index.tsx'
import CodeWrap from '../codeBlock/CodeWrap.tsx'

const ConSamples: React.FC = () => {
  return <Col id={'con'}>
    <Title h2>Con Container</Title>

    <Col between>
      <Title h4>Import</Title>
      <CodeWrap code={`import { Con } from '@lite-u/ui'`}/>

      <Con w={200} h={200} fh p={20} bg={'blue'}>
        <Con fh p={20} bg={'green'}>
          <Con fh p={20} bg={'red'}>
            <Con fh p={20} bg={'yellow'}></Con>
          </Con>
        </Con>
      </Con>
      <CodeWrap code={`
        <Con w={200} h={200} fh p={20} bg={'blue'}>
        <Con fh p={20} bg={'green'}>
          <Con fh p={20} bg={'red'}>
            <Con fh p={20} bg={'yellow'}></Con>
          </Con>
        </Con>
      </Con>    
        `}/>
      <Con w={300} h={300} m={'10px 0'} bg={'#ff7411'} color={'white'}>
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