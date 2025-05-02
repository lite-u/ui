import {Col, Con, P, Paragraph, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const TitlePage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <UsageBlock title={'Titles'}>
          <Col between>
            <Paragraph>h1</Paragraph>
            <P>h2</P>
          </Col>
        </UsageBlock>
      </Con>

    </Row>
  </Col>
}

export default TitlePage