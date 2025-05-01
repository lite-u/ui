import {Button, Col, Con, P, Row, Title} from '@lite-u/ui'
import CodeWrap from '../../components/codeBlock/CodeWrap.tsx'

const ColSamples: React.FC = () => {
  return <Col id={'col'}>
    <Con m={30}></Con>

    <Title h2 sticky>Col</Title>

    <Col between>
      <Title h4>Import</Title>

      <CodeWrap code={`import { Col } from '@lite-u/ui'`}/>
      <Con m={20}></Con>

      <Title h4>With height</Title>
      <Con m={10}></Con>
      <Con w={100} bg={'#f4ab7e'}>
        <Col between h={200} center>
          <Button primary>1</Button>
          <Button primary>2</Button>
          <Button primary>3</Button>
          <Button primary>4</Button>
        </Col>
      </Con>
      <Con m={10}></Con>
      <CodeWrap code={`
         <Col between h={200} center>
          <Button primary>1</Button>
          <Button primary>2</Button>
          <Button primary>3</Button>
          <Button primary>4</Button>
        </Col>
          `}/>

      <Con m={10}></Con>
      <Title h4>With space</Title>
      <Con m={10}></Con>
      <Con w={100} bg={'#f4ab7e'}>
        <Col between center space={20}>
          <P>1</P>
          <P>2</P>
          <P>3</P>
          <P>4</P>
        </Col>
      </Con>
      <Con m={10}></Con>
      <CodeWrap code={`
         <Col between center space={20}>
          <P>1</P>
          <P>2</P>
          <P>3</P>
          <P>4</P>
        </Col>
          `}/>

      <Con m={10}></Con>
      <Title h4>With Row</Title>
      <Con m={10}></Con>

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

      <Con m={10}></Con>

      <CodeWrap code={`
      <Con w={200} h={200} p={20} bg={'blue'}>
        <Con fh p={20} bg={'green'}>
          <Con fh p={20} bg={'red'}>
            <Con fh p={20} bg={'yellow'} box={false}></Con>
          </Con>
        </Con>
      </Con>
        `}/>
    </Col>
  </Col>
}

export default ColSamples