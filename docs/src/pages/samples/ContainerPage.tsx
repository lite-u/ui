import {Col, Con, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const ContainerPage: React.FC = () => {
  return <Col>
    <Row space={10} wrap>
      <Con w={300}>
        <UsageBlock title={'Nested Containers'}>
          <Con w={200} h={200} p={20} bg={'blue'}>
            <Con fh p={20} bg={'green'}>
              <Con fh p={20} bg={'red'}>
                <Con border rounded fh p={20} mr={10} bg={'#000'} box={false}></Con>
              </Con>
            </Con>
          </Con>
        </UsageBlock>
      </Con>

    </Row>
  </Col>
}

export default ContainerPage