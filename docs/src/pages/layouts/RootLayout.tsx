import {Col, Collapse, Con, Flex, MenuItem} from '@lite-u/ui'
import {Link, NavLink, Outlet, useLocation} from 'react-router'
import COMPONENT_ROUTE_MAP from '../componentData.tsx'
import {CSSProperties, useEffect} from 'react'

const RootLayout = () => {
  const location = useLocation()
  const path = location.pathname

  const pageTitles = {
    '/': 'Home | @Lite-u/ui Library',
    '/about': 'About | @Lite-u/ui Library',
    '/components/button': 'Button | @Lite-u/ui Library',
  }

  useEffect(() => {
    document.title = pageTitles[path] || '@Lite-u/ui Library'
  }, [path])

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
            Object.values(COMPONENT_ROUTE_MAP).map((comp, index) =>
              <MenuItem sm style={{padding: 0}} key={index}>
                <NavLink
                  style={({isActive}) => {
                    return {
                      backgroundColor: isActive ? '#0a2e71' : 'transparent',
                      color: isActive ? '#fff' : '#000',
                      width: '100%',
                      height: '100%',
                      paddingLeft: 30,
                    } as CSSProperties
                  }}
                  to={`components/${comp.to}`}>
                  <Col tl fh jc>
                    {comp.name}
                  </Col>
                </NavLink>
              </MenuItem>)
          }
        </Collapse>

        <MenuItem sm><Link to={`compatibility`}>Compatibility</Link></MenuItem>
        <MenuItem sm><Link to={`accessibility`}>Accessibility</Link></MenuItem>
        <MenuItem sm><Link to={`i18n`}>I18n</Link></MenuItem>
        <MenuItem sm><Link to={`responsible`}>Responsible Design</Link></MenuItem>
        <MenuItem sm><Link to={`tree`}>Tree Shaking</Link></MenuItem>
      </Con>

      <Col fw fh ova maxH={'100%'}>
        <Col style={{padding: '0 50px'}}>
          <Outlet/>
        </Col>
      </Col>
    </Flex>
  </Flex>
}
export default RootLayout