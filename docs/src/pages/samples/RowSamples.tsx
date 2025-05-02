import {Button, Col, Con, Row, Title} from '@lite-u/ui'
import CodeWrap from '../../components/codeBlock/CodeWrap.tsx'
import UsageBlock from '../UsageBlock.tsx'

const RowSamples: React.FC = () => {
  return <Col>
    <Row start space={10}>
      <Con w={'auto'}>
        <UsageBlock title={'With Width'}>
          <Row between center w={200}>
            <Button s primary>1</Button>
            <Button s primary>2</Button>
            <Button s primary>3</Button>
            <Button s primary>4</Button>
          </Row>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'With Space'}>
          <Row space={20}>
            <Button error>1</Button>
            <Button error>2</Button>
            <Button error>3</Button>
            <Button error>4</Button>
          </Row>
        </UsageBlock>
      </Con>
    </Row>

    <Col between>

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