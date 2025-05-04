import {Button, Col, Con, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const ColumnPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={200}>
        <SampleBlock title={'With Height'}>
          <Col border around center h={200}>
            <Button s primary>1</Button>
            <Button s primary>2</Button>
            <Button s primary>3</Button>
            <Button s primary>4</Button>
          </Col>
        </SampleBlock>
      </Con>

      <Con w={200}>
        <SampleBlock title={'With Space'}>
          <Col border center space={10}>
            <Button error>1</Button>
            <Button error>2</Button>
            <Button error>3</Button>
            <Button error>4</Button>
          </Col>
        </SampleBlock>
      </Con>

      <Con w={'auto'}>
        <SampleBlock title={'With Row'}>
          <Row border p={10} m={'0 auto'} w={115} h={150} space={2} center fz={30} color={'red'}>
            <Col start fh fz={18}>
              <p> 8 </p>
              <p> ♥ </p>
            </Col>
            <Col center jc fh space={10}>
              <p> ♥ </p>
              <p> ♥ </p>
              <p> ♥ </p>
            </Col>

            <Col h={60} center jc fh>
              <p> ♥ </p>
              <p> ♥ </p>
            </Col>

            <Col center jc fh space={10}>
              <p> ♥ </p>
              <p> ♥ </p>
              <p> ♥ </p>
            </Col>

            <Col je end fh fz={18}>
              <p> ♥ </p>
              <p> 8 </p>
            </Col>
          </Row>
        </SampleBlock>
      </Con>

    </Row>
  </Col>
}

export default ColumnPage