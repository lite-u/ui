import {Outlet, useLocation} from 'react-router'
import {useEffect} from 'react'
import HookHead from './HookHead.tsx'

const HooksLayout = () => {
  const {pathname} = useLocation()

  useEffect(() => {

  }, [pathname])

  return <div>
    <HookHead />

    <Outlet/>

    {/*<ComponentAPI/>*/}

    {/*<ComponentFoot/>*/}
  </div>
}

export default HooksLayout
