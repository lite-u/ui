import {Col, Con, P, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const TitlePage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <SampleBlock title={'Titles'}>
          <Row w={400}>
            <Col fw stretch>
              <P size={10} color="gray"> Font size 10 </P>
              <P size={12} color="gray"> Font size 12 </P>
              <P size={14} color="gray"> Font size 14 </P>
              <P size={16} color="gray"> Font size 16 </P>
              <P size={18} color="gray"> Font size 18 </P>
              <P size={20} color="gray"> Font size 20 </P>
              <P size={30} color="gray"> Font size 30 </P>
              <P size={40} color="gray"> Font size 40 </P>
              <P size={60} color="gray"> Font size 60 </P>

              <P size={20} center color="gray">
                Centered Paragraph
              </P>
            </Col>
          </Row>
        </SampleBlock>
      </Con>

    </Row>
  </Col>
}

export default TitlePage