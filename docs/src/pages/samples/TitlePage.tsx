import {Col, Con, Title} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const TitlePage: React.FC = () => {
  return <Col>
    <Con w={200}>
      <SampleBlock title={'Titles'}>
        <Col stretch between>
          <Title h1 color={'red'} sticky style={{zIndex: 100}}>h1</Title>
          <Title h2>h2</Title>
          <Title h3>h3</Title>
          <Title h4>h4</Title>
          <Title h5>h5</Title>
          <Title h6>h6</Title>
        </Col>
      </SampleBlock>

    </Con>
  </Col>
}

export default TitlePage