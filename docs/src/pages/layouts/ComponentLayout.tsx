import {Outlet} from 'react-router'
import ComponentHead from '../../components/ComponentHead.tsx'

const ComponentLayout = () => {
  return <div>
    <ComponentHead/>
    <Outlet/>
  </div>
}

export default ComponentLayout
