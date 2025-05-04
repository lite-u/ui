import {Col, Collapse, Con, Flex, MenuItem} from '@lite-u/ui'
import {Link, NavLink, Outlet, useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from './componentsLayout/componentData.tsx'
import {CSSProperties, useEffect, useRef} from 'react'
import HOOK_ROUTE_MAP from './hooksLayout/componentData.tsx'

const RootLayout = () => {
  const {pathname, hash} = useLocation()
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mainRef.current) {
      const paths = pathname.split('/')
      const pathLen = paths.length

      if (pathLen === 3) {
        if (hash) {
          const ele = document.querySelector(hash)

          ele?.scrollIntoView()
        } else {
          mainRef.current.scroll(0, 0)
        }
      }

      document.title = '@lite-u/ui Library'
    }

  }, [pathname])

  return <Flex col fw fh ovh>
    <Flex justifyContent={'between'} style={{borderBottom: '1px solid gray'}}>
      <header style={{height: 50}}>header</header>
    </Flex>

    <Flex fh ovh>
      <Con fh w={300}
           style={{
             overflowY: 'auto',
             boxShadow: '0px 0 4px 0px #b0b0b0',
           }}>
        <MenuItem>
          <Link to={`installation`}>Installation</Link>
        </MenuItem>

        <Collapse head={<MenuItem style={{flex: 1}}>Components</MenuItem>}>
          {
            Object.values(COMPONENT_ROUTE_MAP).map((comp, index) => {
              return <NavItem key={index} to={`components/${comp.to}`} name={comp.name}/>
            })
          }
        </Collapse>
        <Collapse head={<MenuItem style={{flex: 1}}>Hooks</MenuItem>}>
          {
            Object.values(HOOK_ROUTE_MAP).map((comp, index) => {
              return <NavItem key={index} to={`components/${comp.to}`} name={comp.name}/>
            })
          }
        </Collapse>

        <MenuItem s><Link to={`compatibility`}>Compatibility</Link></MenuItem>
        <MenuItem s><Link to={`accessibility`}>Accessibility</Link></MenuItem>
        <MenuItem s><Link to={`i18n`}>I18n</Link></MenuItem>
        <MenuItem s><Link to={`responsible`}>Responsible Design</Link></MenuItem>
        <MenuItem s><Link to={`tree`}>Tree Shaking</Link></MenuItem>
      </Con>

      <Col ref={mainRef} role={'app-main'} fw fh ova maxH={'100%'}>
        <Col style={{padding: '0 50px'}}>
          <Outlet/>
        </Col>
      </Col>
    </Flex>
  </Flex>
}

const NavItem: FC<{ to: string, name: string }> = ({to, name}) => {
  return <MenuItem s style={{padding: 0, width: '100%'}}>
    <NavLink
      style={({isActive}) => {
        console.log(isActive, name)
        return {
          backgroundColor: isActive ? '#0a2e71' : 'transparent',
          color: isActive ? '#fff' : '#000',
          width: '100%',
          height: '100%',
          paddingLeft: 30,
          display: 'block',
        } as CSSProperties
      }}
      to={to}>
      <Col tl fh jc>{name}</Col>
    </NavLink>
  </MenuItem>
}
export default RootLayout