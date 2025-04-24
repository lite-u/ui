import {Col, Con, Panel, Row, Title} from '@ui/index.tsx'
import CodeWrap from '../codeBlock/CodeWrap.tsx'

const ConSamples: React.FC = () => {
  return <Col id={'con'}>
    <Title h2>Con Container</Title>

    <Col between>
      <Title h4>Import</Title>

      <CodeWrap code={`import { Con } from '@lite-u/ui'`}/>

      <Con m={20}></Con>

      <Con w={200} h={200} p={20} bg={'blue'}>
        <Con fh p={20} bg={'green'}>
          <Con fh p={20} bg={'red'}>
            <Con fh p={20} bg={'yellow'} box={false}></Con>
          </Con>
        </Con>
      </Con>

      <Con m={20}></Con>

      <CodeWrap code={`
      <Con w={200} h={200} p={20} bg={'blue'}>
        <Con fh p={20} bg={'green'}>
          <Con fh p={20} bg={'red'}>
            <Con fh p={20} bg={'yellow'} box={false}></Con>
          </Con>
        </Con>
      </Con>
        `}/>

      <Con m={20}></Con>

      <Col>
        <Row>
          <Col w={400}>
            <Panel title={'Con API'}></Panel>
          </Col>
        </Row>
      </Col>
    </Col>
  </Col>
}

export default ConSamples