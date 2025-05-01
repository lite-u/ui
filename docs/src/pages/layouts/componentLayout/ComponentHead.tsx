import {Col, Con, Title} from '@lite-u/ui'
import CodeWrap from '../../../components/codeBlock/CodeWrap.tsx'
import {Link, useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from '../../componentData.tsx'

const ComponentHead = () => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return

  return <Con>
    <Col>
      <Title id={COMP_ROUTE.to}><Link to={COMP_ROUTE.to}>#</Link> {COMP_ROUTE.name}</Title>
      <Con m={20}></Con>
      <Title h4>Import</Title>
      <CodeWrap style={{maxWidth: 400}} code={`import { ${COMP_ROUTE.apiNameKey} } from '@lite-u/ui'`}/>
      <Con m={'0 0 20px 0'}></Con>

    </Col>
  </Con>
}

export default ComponentHead