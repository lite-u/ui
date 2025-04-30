import {Button, Col, Interactable, Row, Select, SelectItem, Title, Tooltip} from '@ui/index.tsx'
import CodeWrap from '../codeBlock/CodeWrap.tsx'

const Installation: React.FC = () => {
  const code1 = `npm install @lite-u/ui`
  const code2 =
    `import LiteUIProvider from '@ui/index'

export const App() {
  return <LiteUIProvider>
    Your Code Block
  </LiteUIProvider>
}`

  return <Col id={'installation'} style={{marginTop: 100}}>
    <Interactable tabIndex={0}
                  onFocus={() => {
                    console.log('end')
                  }}
                  hover={{
                    backgroundColor: 'red',
                  }}
                  focus={{
                    backgroundColor: 'blue',
                  }}
                  down={{
                    backgroundColor: 'green',
                  }}
    >
      <Title h2 sticky>Installation</Title>
      <Select>
        <SelectItem value={1}>1</SelectItem>
        <SelectItem value={2}>2</SelectItem>
        <SelectItem value={3}>3</SelectItem>
      </Select>
      <Tooltip title="Installation">
        <Button>Hello</Button>
      </Tooltip>
      <Row>
        <CodeWrap code={code1}/>
      </Row>

      <Title h4>Import</Title>
      <Row>
        <CodeWrap code={code2}/>
      </Row>
    </Interactable>
  </Col>
}

export default Installation