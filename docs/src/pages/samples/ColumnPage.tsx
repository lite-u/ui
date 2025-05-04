import {Button, Col, Con, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const HeartIcon = () => {
  return <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 21.35c-.45-.42-1.14-1.01-1.94-1.72C5.92 15.3 2 12.05 2 8.28
           2 5.5 4.5 3 7.28 3
           c1.91 0 3.63 1.06 4.72 2.72
           C13.09 4.06 14.81 3 16.72 3
           19.5 3 22 5.5 22 8.28
           c0 3.77-3.92 7.02-8.06 11.35
           -.8.71-1.49 1.3-1.94 1.72z"/>
  </svg>
}

const ColumnPage: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={200}>
        <UsageBlock title={'With Height'}>
          <Col border between center h={200}>
            <Button s primary>1</Button>
            <Button s primary>2</Button>
            <Button s primary>3</Button>
            <Button s primary>4</Button>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={200}>
        <UsageBlock title={'With Space'}>
          <Col border center space={10}>
            <Button error>1</Button>
            <Button error>2</Button>
            <Button error>3</Button>
            <Button error>4</Button>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'With Row'}>
          <Row border p={10} w={115} h={150} space={2} center fz={30} color={'red'}>
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
        </UsageBlock>
      </Con>

    </Row>
  </Col>
}

export default ColumnPage