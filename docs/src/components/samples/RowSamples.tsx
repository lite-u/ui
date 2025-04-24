import {Button, Col, Con, Row, Title} from '@ui/index.tsx'
import CodeWrap from '../codeBlock/CodeWrap.tsx'

const RowSamples: React.FC = () => {
  return <Col id={'row'}>
    <Title h2 sticky>Row</Title>

    <Col between>
      <Title h4>Import</Title>

      <CodeWrap code={`import { Row } from '@lite-u/ui'`}/>
      <Con m={20}></Con>

      <Title h4>With width</Title>
      <Con m={10}></Con>
      <Row between center w={400}>
        <Button primary>1</Button>
        <Button primary>2</Button>
        <Button primary>3</Button>
        <Button primary>4</Button>
      </Row>
      <Con m={10}></Con>
      <CodeWrap code={`
      <Row between center w={400}>
        <Button primary>1</Button>
        <Button primary>2</Button>
        <Button primary>3</Button>
        <Button primary>4</Button>
      </Row>
          `}></CodeWrap>


      <Con m={20}></Con>
      <Title h4>With space</Title>
      <Con m={10}></Con>
      <Row between center space={5}>
        <Button error>1</Button>
        <Button error>2</Button>
        <Button error>3</Button>
        <Button error>4</Button>
      </Row>

      {/*
      <Con m={20}></Con>

      <Con bg={'#ffe0b1'} w={200}>
        <Row between h={100}>
          <Button>hello</Button>
          <Button>hello</Button>
        </Row>
        <Row between end h={100}>
          <Button>hello</Button>
          <Button>hello</Button>
        </Row>
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
*/}
    </Col>
  </Col>
}

export default RowSamples