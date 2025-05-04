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
  // @ts-ignore
  const docData = OUTPUT_JSON[HOOK_ROUTE.apiNameKey]

  const to = HOOK_ROUTE.to
  const brief = docData?.tags.brief
  const intro = docData?.tags.intro
  const codeExample = docData?.tags.example
  const apiData = docData?.props

  useEffect(() => {

    // console.log(path)
    // document.title = `${path.replace('')} @Lite-u/ui Library`
  }, [pathname])

  return <div>
    {brief && <CommonHead to={to} name={HOOK_ROUTE.name} brief={brief} intro={intro} example={codeExample}/>}

    <Outlet/>

    {apiData && <CommonAPI apiData={apiData}/>}

    <CommonFoot/>
  </div>
}

export default HooksLayout
