import {Outlet, useMatch,useLocation} from 'react-router'
import ComponentHead from './ComponentHead.tsx'
import ComponentAPI from './ComponentAPI.tsx'
import ComponentFoot from './ComponentFoot.tsx'
import {useEffect} from 'react'

const ComponentLayout = () => {
  const {pathname} = useLocation()
  const isHere = useMatch('/components/*')
  console.log(isHere)
  useEffect(() => {

    console.log('ComponentLayout - ', pathname)
    // console.log(path)
    // document.title = `${path.replace('')} @Lite-u/ui Library`
  }, [pathname])

  return <div>
    <ComponentHead/>

    <Outlet/>

    <ComponentAPI/>

    <ComponentFoot/>
  </div>
}

export default ComponentLayout
