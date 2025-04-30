import {Outlet} from 'react-router'
import ComponentHead from '../../components/ComponentHead.tsx'

const ComponentLayout = () => {
  /*const location = useLocation();
  // console.log(location.pathname);
  const currentPath = location.pathname.split('/')[2]*/
  // console.log(currentPath)
  return <div>
    <ComponentHead/>
    <Outlet/>

  </div>
}

export default ComponentLayout
