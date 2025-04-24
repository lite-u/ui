import {Col, Con, Title} from '@ui/index.tsx'
import CodeWrap from '../codeBlock/CodeWrap.tsx'
import {ReactNode} from 'react'

const SampleBase: React.FC<{ name: string, children: ReactNode }> = ({name, children}) => {
  return <Col id={name.toLowerCase()}>
    <Con m={20}></Con>
    <Title h2>{name}</Title>
    <Title h4>Import</Title>
    <CodeWrap code={`import { ${name} } from '@lite-u/ui'`}/>
    <Con m={'0 0 20px 0'}></Con>

    {children}
  </Col>
}

export default SampleBase