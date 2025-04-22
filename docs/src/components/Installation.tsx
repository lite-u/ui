import {Col, Row, Title} from '@ui/index.tsx'
import CodeBlock from './codeBlock/codeBlock.tsx'

const Installation: React.FC = () => {
  return <Col id={'installation'}>
    <Title h2>Installation</Title>

    <Row>
      <CodeBlock code={`hello`}/>
    </Row>
  </Col>
}

export default Installation