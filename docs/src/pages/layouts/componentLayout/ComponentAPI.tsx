import {Col, Con, Link, Title} from '@lite-u/ui'
import {useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from './componentData.tsx'
import OUTPUT_JSON from '../../../../json/output.json'
import API from '../../../components/api/API.tsx'

const ComponentAPI = () => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return

  // @ts-ignore
  const props = OUTPUT_JSON[COMP_ROUTE.apiNameKey].props

  return <Con mt={100} mb={40}>
    <Col w={'auto'}>
      <Title h4 id="api"><Link href={'#api'}># API</Link></Title>

      <Con mb={30}></Con>
      <API data={props}/>

    </Col>
  </Con>
}

export default ComponentAPI