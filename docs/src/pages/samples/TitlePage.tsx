import {Col, Con, Row, Title} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const TitlePage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <UsageBlock title={'Titles'}>
          <Col between>
            <Title h1 sticky style={{zIndex:100}}>h1</Title>
            <Title h2>h2</Title>
            <Title h3>h3</Title>
            <Title h4>h4</Title>
            <Title h5>h5</Title>
            <Title h6>h6</Title>
          </Col>
        </UsageBlock>
      </Con>

    </Row>
  </Col>
}

export default TitlePage