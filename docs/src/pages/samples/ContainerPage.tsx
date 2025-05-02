import {Col, Con, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const ContainerPage: React.FC = () => {
  return <Col>
    <Row space={10} wrap>
      <Con w={300}>
        <UsageBlock title={'xs'}>
          <Con w={200} h={200} p={20} bg={'blue'}>
            <Con fh p={20} bg={'green'}>
              <Con fh p={20} bg={'red'}>
                <Con fh p={20} bg={'yellow'} box={false}></Con>
              </Con>
            </Con>
          </Con>
        </UsageBlock>
      </Con>

    </Row>
  </Col>
}

export default ContainerPage