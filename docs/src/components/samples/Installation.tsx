import {Col, Row, Title} from '@ui/index.tsx'
import CodeWrap from '../codeBlock/CodeWrap.tsx'

const Installation: React.FC = () => {
  const code1 = `npm install @lite-u/ui`
  const code2 =
    `import ThemeProvider from '@lite-u/ui/theme'

export const App() {
  return <ThemeProvider>
    Your Code Block
  </ThemeProvider>
}`

  return <Col id={'installation'} style={{marginTop: 100}}>
    <Title h2 sticky>Installation</Title>

    <Row>
      <CodeWrap code={code1}/>
    </Row>

    <Title h4>Import</Title>
    <Row>
      <CodeWrap code={code2}/>
    </Row>
  </Col>
}

export default Installation