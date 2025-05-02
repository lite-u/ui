import {Button, Col, Con, Row} from '@lite-u/ui'
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

      <Con w={'auto'}>
        <UsageBlock title={'With Column'}>
          <Row space={20}>
            <Button error>1</Button>
            <Button error>2</Button>
            <Button error>3</Button>
            <Button error>4</Button>
          </Row>
        </UsageBlock>
      </Con>

    </Row>

  </Col>
}

export default RowSamples