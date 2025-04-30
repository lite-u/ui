import {Col, Collapse, Con, Flex, MenuItem} from '@lite-u/ui'
import {Link, Outlet} from 'react-router'
import COMPONENT_ROUTES from './componentData.tsx'

const RootLayout = () => <Flex col fw fh ovh>
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
          COMPONENT_ROUTES.map((comp, index) =>
            <MenuItem sm style={{padding: 0}} key={index}>
              <Link style={{width: '100%', height: '100%'}}
                    to={`components/${comp.to}`}>
                <Col fh jc center tl>
                  {comp.name}
                </Col>

              </Link>
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
export default RootLayout