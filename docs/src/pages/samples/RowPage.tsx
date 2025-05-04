import {Button, Col, Con, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const RowPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <SampleBlock title={'With Width'}>
          <Row between center w={200}>
            <Button s primary>1</Button>
            <Button s primary>2</Button>
            <Button s primary>3</Button>
            <Button s primary>4</Button>
          </Row>
        </SampleBlock>
      </Con>

      <Con w={'auto'}>
        <SampleBlock title={'With Space'}>
          <Row space={20}>
            <Button error>1</Button>
            <Button error>2</Button>
            <Button error>3</Button>
            <Button error>4</Button>
          </Row>
        </SampleBlock>
      </Con>

      <Con w={230}>
        <SampleBlock title={'With Column'}>
          <Row space={20} between w={200} h={200}>
            <Col between fh>
              <Button>1</Button>
              <Button>4</Button>
            </Col>

            <Col fh center jc>
              <Button>5</Button>
            </Col>

            <Col between end fh>
              <Button>2</Button>
              <Button>3</Button>
            </Col>
          </Row>
        </SampleBlock>
      </Con>

    </Row>
  </Col>
}

export default RowPage