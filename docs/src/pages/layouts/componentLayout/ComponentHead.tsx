import {Col, Con, Link, Title} from '@lite-u/ui'
import {useLocation} from 'react-router'
import CodeWrap from '../../../components/codeBlock/CodeWrap.tsx'
import MDBlock from '../../../components/codeBlock/MDBlock.tsx'
import COMPONENT_ROUTE_MAP from './componentData.tsx'
import OUTPUT_JSON from '../../../../json/output.json'

const ComponentHead = () => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return
  if (!OUTPUT_JSON[COMP_ROUTE.apiNameKey]) return
  // @ts-ignore
  const brief = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.brief
  // @ts-ignore
  const intro = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.intro
  // @ts-ignore
  const codeExample = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.example
  const space = 100

  return <Con>
    <Col>
      <Con mt={10}></Con>
      {/*<Title id={COMP_ROUTE.to}><Link to={COMP_ROUTE.to}>#</Link> {COMP_ROUTE.name}</Title>*/}
      <Title id={COMP_ROUTE.to}>{COMP_ROUTE.name}</Title>

      {/*<Con mt={50}/>*/}

      {/*<Title h4>Intro</Title>*/}
      <Con fz={15} pl={4} style={{color: '#3f3f3f', lineHeight: '1.5rem'}}>
        <MDBlock>{brief}</MDBlock>
      </Con>

      <Con mt={space}></Con>
      <Title h4 id="description"><Link href={'#description'}># Description</Link></Title>

      <Con mt={10}></Con>
      <Con pl={0} fz={15} style={{color: '#3f3f3f', lineHeight: '1.5rem'}}>
        <MDBlock>{intro}</MDBlock>
      </Con>

      <Con mt={space}></Con>
      <Title h4 id="usage"><Link href={'#usage'}># Usage</Link></Title>


      <Con mt={10}></Con>
      <CodeWrap style={{maxWidth: 600}} code={`\n ${codeExample}`}/>
      <Con m={'0 0 20px 0'}></Con>


      <Con mt={space}></Con>
      <Title h4 id="examples"><Link href={'#examples'}># Examples</Link></Title>

    </Col>
  </Con>
}

export default ComponentHead