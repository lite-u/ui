import {Col, Con, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const ContainerPage: React.FC = () => {
  return <Col>
    <Row space={10} wrap>
      <Con w={300}>
        <SampleBlock title={'Nested Containers'}>
          <Con w={200} h={200} p={20} bg={'#0064a5'}>
            <Con fh p={20} bg={'#088312'}>
              <Con fh p={20} bg={'#980808'}>
                <Con border rounded fh p={20} mr={10} bg={'#000'} box={false}></Con>
              </Con>
            </Con>
          </Con>
        </SampleBlock>
      </Con>

    </Row>
  </Col>
}

export default ContainerPage