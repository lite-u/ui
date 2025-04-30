import {Col, Con, Title} from '@ui/index.tsx'
import CodeWrap from '../components/codeBlock/CodeWrap.tsx'

const TitleSamples: React.FC = () => {
  return <Col  >

    <Con m={10}></Con>
    <Col between>
      <Title h1>h1</Title>
      <Title h2>h2</Title>
      <Title h3>h3</Title>
      <Title h4>h4</Title>
      <Title h5>h5</Title>
      <Title h6>h6</Title>
    </Col>

    <Con m={10}/>
    <CodeWrap code={`
      <Title h1>h1</Title>
      <Title h2>h2</Title>
      <Title h3>h3</Title>
      <Title h4>h4</Title>
      <Title h5>h5</Title>
      <Title h6>h6</Title>
    `}></CodeWrap>
  </Col>
}

export default TitleSamples