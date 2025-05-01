import {Col, Con, Title} from '@lite-u/ui'
import {useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from '../../componentData.tsx'
import OUTPUT_JSON from '../../../../json/output.json'
import API from '../../../components/api/API.tsx'

const ComponentAPI = () => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return

  // console.log(OUTPUT_JSON[COMP_ROUTE.apiNameKey])

  return <Con>
    <Col w={'auto'}>
      <Title id={COMP_ROUTE.to} sticky>API</Title>

      <API data={OUTPUT_JSON[COMP_ROUTE.apiNameKey].props}/>
    </Col>
  </Con>
}

export default ComponentAPI