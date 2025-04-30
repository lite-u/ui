import {Col, Collapse, Con, Flex, MenuItem} from '@lite-u/ui'
import {Link, Outlet} from 'react-router'

const components = [
  'input',
  'table',
  'button',
  'iconButton',
  'select',
  'link',
  'modal',
  'panel',
  'con',
  'row',
  'col',
  'title',
  'paragraph',
  'menu',
  'menuItem',
  'drop',
  'notification',
  'transition',
  'tooltip',
]
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
      <Collapse head={
        <MenuItem style={{flex: 1}}>Components</MenuItem>
      }>
        {
          components.map((comp, index) => {
            return (
              <MenuItem sm style={{padding: 0}} key={index}>
                <Link style={{padding: '0px 20px'}} to={`components/${comp}`}>{comp}</Link>
              </MenuItem>)
          })
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