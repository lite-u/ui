import {Con, MenuItem, Row} from '@lite-u/ui'
import {NavLink, useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from './componentData.tsx'

const ComponentFoot = () => {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2]

  // console.log(Object.keys(COMPONENT_ROUTE_MAP))
  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]

  if (!COMP_ROUTE) return

  return <div></div>
  return <Con h={50} mt={30}>
    <Row between>
      <Con tl w={200}><MenuItem><NavLink>Pre</NavLink></MenuItem></Con>
      <Con tr w={200}><MenuItem><NavLink>Pre</NavLink></MenuItem></Con>
    </Row>
  </Con>
}

export default ComponentFoot