import {Col, Title} from '@ui/index.tsx'

const TitleSamples: React.FC = () => {
  return <Col id={'title'}>
    <Title h2>Title</Title>

    <Col between>
      <Title h1>h1</Title>
      <Title h2>h2</Title>
      <Title h3>h3</Title>
      <Title h4>h4</Title>
      <Title h5>h5</Title>
      <Title h6>h6</Title>
    </Col>
  </Col>
}

export default TitleSamples