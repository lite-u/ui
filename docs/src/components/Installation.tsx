import {Col, Row, Title} from '@ui/index.tsx'
import CodeBlock from './codeBlock/codeBlock.tsx'

const Installation: React.FC = () => {
  const code = `npm install @lite-u/ui`
  return <Col id={'installation'}>
    <Title h2 sticky>Installation</Title>

    <Row>
      <CodeBlock code={code}/>
    </Row>
  </Col>
}

export default Installation