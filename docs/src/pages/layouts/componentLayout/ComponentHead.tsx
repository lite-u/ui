import {Col, Con, P, Title} from '@lite-u/ui'
import CodeWrap from '../../../components/codeBlock/CodeWrap.tsx'
import {Link, useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from '../../componentData.tsx'
import OUTPUT_JSON from '../../../../json/output.json'
import MDBlock from '../../../components/codeBlock/MDBlock.tsx'

const ComponentHead = () => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return

  // @ts-ignore
  const brief = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.brief
  // @ts-ignore
  const intro = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.intro
  // @ts-ignore
  const example = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.example

  return <Con>
    <Col>
      <Title id={COMP_ROUTE.to}><Link to={COMP_ROUTE.to}>#</Link> {COMP_ROUTE.name}</Title>
      <Con mt={20}></Con>
      <MDBlock>{brief}</MDBlock>
      <MDBlock>{intro}</MDBlock>
      {/*<P size={16}>{brief}</P>*/}
      {/*<Con size={16}>
        <pre style={{fontFamily: 'sans-serif'}}>{intro}</pre>
      </Con>*/}
      <Con mt={20}></Con>

      <Title h4>Usage</Title>
      <CodeWrap style={{maxWidth: 400}} code={`
      import { ${COMP_ROUTE.apiNameKey} } from '@lite-u/ui'
      
  ${example}
      `}/>
      <Con m={'0 0 20px 0'}></Con>

    </Col>
  </Con>
}

export default ComponentHead