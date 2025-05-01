import {Outlet} from 'react-router'
import ComponentHead from './ComponentHead.tsx'
import ComponentAPI from './ComponentAPI.tsx'

const ComponentLayout = () => {
  return <div>
    <ComponentHead/>
    <Outlet/>

    <ComponentAPI/>
    {/*<ComponentFoot/>*/}
  </div>
}

export default ComponentLayout
