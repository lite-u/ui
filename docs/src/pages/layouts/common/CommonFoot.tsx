import {useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from './CommonData.tsx'

const CommonFoot = () => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return

  return <div></div>
  /*  return <Con h={50} mt={30}>
      <Row between>
        <Con tl w={200}><MenuItem><NavLink>Pre</NavLink></MenuItem></Con>
        <Con tr w={200}><MenuItem><NavLink>Pre</NavLink></MenuItem></Con>
      </Row>
    </Con>*/
}

export default CommonFoot