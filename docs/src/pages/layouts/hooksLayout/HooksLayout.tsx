import {Outlet, useLocation} from 'react-router'
import {useEffect} from 'react'
import CommonAPI from '../common/CommonAPI.tsx'
import OUTPUT_JSON from '../../../../json/output.json'
import HOOK_ROUTE_MAP from './hooksData.tsx'
import CommonHead from '../common/CommonHead.tsx'
import CommonFoot from '../common/CommonFoot.tsx'

const HooksLayout = () => {
  const {pathname} = useLocation()
  const currentPath = location.pathname.split('/')[2]
  const HOOK_ROUTE = HOOK_ROUTE_MAP[currentPath as keyof typeof HOOK_ROUTE_MAP]

  if (!HOOK_ROUTE) return
  // @ts-ignore
  if (!OUTPUT_JSON[HOOK_ROUTE.apiNameKey]) return
  if (!HOOK_ROUTE) return
  // @ts-ignore
  if (!OUTPUT_JSON[HOOK_ROUTE.apiNameKey]) return
  const to = HOOK_ROUTE.to
  // @ts-ignore
  const brief = OUTPUT_JSON[HOOK_ROUTE.apiNameKey].tags.brief
  // @ts-ignore
  const intro = OUTPUT_JSON[HOOK_ROUTE.apiNameKey].tags.intro
  // @ts-ignore
  const codeExample = OUTPUT_JSON[HOOK_ROUTE.apiNameKey].tags.example
  // @ts-ignore
  const apiData = OUTPUT_JSON[HOOK_ROUTE.apiNameKey].props

  useEffect(() => {

    // console.log(path)
    // document.title = `${path.replace('')} @Lite-u/ui Library`
  }, [pathname])

  return <div>
    <CommonHead to={to} name={HOOK_ROUTE.name} brief={brief} intro={intro} example={codeExample}/>

    <Outlet/>

    <CommonAPI apiData={apiData}/>

    <CommonFoot/>
  </div>
}

export default HooksLayout
