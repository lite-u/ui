import {useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from './componentData.tsx'
import OUTPUT_JSON from '../../../../json/output.json'
import CommonHead from '../common/CommonHead.tsx'

const ComponentHead = () => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return
  // @ts-ignore
  if (!OUTPUT_JSON[COMP_ROUTE.apiNameKey]) return
  // @ts-ignore
  const brief = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.brief
  // @ts-ignore
  const intro = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.intro
  // @ts-ignore
  const codeExample = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.example

  return <CommonHead name={COMP_ROUTE.name} brief={brief} intro={intro} example={codeExample}/>
}

export default ComponentHead