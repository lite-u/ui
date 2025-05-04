import {Col, Con, Link, Title} from '@lite-u/ui'
import {useLocation} from 'react-router'
import CodeWrap from '../../../components/codeBlock/CodeWrap.tsx'
import MDBlock from '../../../components/codeBlock/MDBlock.tsx'
import COMPONENT_ROUTE_MAP from './componentData.tsx'
import OUTPUT_JSON from '../../../../json/output.json'

const CommonHead = (
  {
    name,
    brief,
    intro,
    example,
  }
  : {
    name: string,
    brief: string,
    intro: string,
    example: string,
  }) => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return
  if (!OUTPUT_JSON[COMP_ROUTE.apiNameKey]) return

  const space = 100

  return <Con maxW={620}>
    <Col>
      <Con mt={10}></Con>
      <Title id={COMP_ROUTE.to}>{name}</Title>

      <Con fz={15} pl={4} color={'#3f3f3f'} style={{lineHeight: '1.5rem'}}>
        <MDBlock>{brief}</MDBlock>
      </Con>

      <Con mt={space}></Con>
      <Title h4 id="description"><Link href={'#description'}># Description</Link></Title>

      <Con mt={10}></Con>
      <Con pl={0} fz={15} color={'#3f3f3f'} style={{lineHeight: '1.5rem'}}>
        <MDBlock>{intro}</MDBlock>
      </Con>

      <Con mt={space}></Con>
      <Title h4 id="usage"><Link href={'#usage'}># Usage</Link></Title>


      <Con mt={10}></Con>
      <CodeWrap wrapStyle={{maxWidth: 600}} code={`\n ${example}`}/>
      <Con m={'0 0 20px 0'}></Con>


      <Con mt={space}></Con>
      <Title h4 id="examples"><Link href={'#examples'}># Examples</Link></Title>

    </Col>
  </Con>
}

export default CommonHead