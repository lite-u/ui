import {Col, Con, Title} from '@lite-u/ui'
import CodeWrap from './codeBlock/CodeWrap.tsx'
import {useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from '../pages/componentData.tsx'

const ComponentHead = () => {
  const location = useLocation()
  // console.log(location.pathname);
  const currentPath = location.pathname.split('/')[2]
  console.log(currentPath)
  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return

  return <Con>
    <Col id={COMP_ROUTE.to}>
      12
      <Con m={20}></Con>
      <Title h2>{COMP_ROUTE.name}</Title>
      <Title h4>Import</Title>
      <CodeWrap code={`import { ${COMP_ROUTE.name} } from '@lite-u/ui'`}/>
      <Con m={'0 0 20px 0'}></Con>
    </Col>
  </Con>
}

export default ComponentHead