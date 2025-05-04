import {Outlet, useLocation} from 'react-router'
import {useEffect} from 'react'

const HooksLayout = () => {
  const {pathname} = useLocation()

  useEffect(() => {

  }, [pathname])

  return <div>
    {/*<ComponentHead/>*/}

    <Outlet/>

    {/*<ComponentAPI/>*/}

    {/*<ComponentFoot/>*/}
  </div>
}

export default HooksLayout
