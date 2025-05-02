import {Col, Con, Panel, Row,  } from '@lite-u/ui'
import CodeWrap from '../../components/codeBlock/CodeWrap.tsx'

const ContainerPage: React.FC = () => {
  return <Col  >

    <Col between>

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

export default ContainerPage