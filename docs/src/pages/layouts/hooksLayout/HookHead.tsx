import {useLocation} from 'react-router'
import HOOK_ROUTE_MAP from './hooksData.tsx'
import OUTPUT_JSON from '../../../../json/output.json'
import CommonHead from '../common/CommonHead.tsx'

const HookHead = () => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  const HOOK_ROUTE = HOOK_ROUTE_MAP[currentPath as keyof typeof HOOK_ROUTE_MAP]

  if (!HOOK_ROUTE) return
  // @ts-ignore
  if (!OUTPUT_JSON[HOOK_ROUTE.apiNameKey]) return
  // @ts-ignore
  const to = HOOK_ROUTE.to
  // @ts-ignore
  const brief = OUTPUT_JSON[HOOK_ROUTE.apiNameKey].tags.brief
  // @ts-ignore
  const intro = OUTPUT_JSON[HOOK_ROUTE.apiNameKey].tags.intro
  // @ts-ignore
  const codeExample = OUTPUT_JSON[HOOK_ROUTE.apiNameKey].tags.example

  return <CommonHead to={to} name={HOOK_ROUTE.name} brief={brief} intro={intro} example={codeExample}/>
}

export default HookHead