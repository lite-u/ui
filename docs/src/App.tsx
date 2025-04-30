import LiteUIProvider, {Flex} from '@ui/index'
import {Col, Link, Menu, MenuItem} from '@ui/index.tsx'
import Installation from './pages/Installation.tsx'
import SAMPLES from './pages'
import SampleBase from './pages/SampleBase.tsx'
import Collapse from '@ui/components/collapse/Collapse.tsx'

function App() {
  return <LiteUIProvider>
    <Flex col fw fh ovh>
      <Flex justifyContent={'between'} style={{borderBottom: '1px solid gray'}}>
        <header style={{height: 50}}>header</header>
      </Flex>

      <Flex h={'auto'} ovh>
        <Flex col fh w={300} style={{
          overflowY: 'auto',
          boxShadow: '0px 0 4px 0px #b0b0b0',
        }}>
          <Menu space={0}>
            <MenuItem>
              <Link href={`#installation`}>Installation</Link>
            </MenuItem>

            <Collapse head={
              <MenuItem style={{flex: 1}}>Components</MenuItem>
            }>
              {
                SAMPLES.map((item, index) => {
                  return (
                    <MenuItem sm style={{padding: 0}} key={index}>
                      <Link style={{padding: '0px 20px'}} href={`#${item.name.toLowerCase()}`}>{item.name}</Link>
                    </MenuItem>)
                })
              }
            </Collapse>
            <MenuItem sm><Link href={`#Accessibility`}>Compatibility</Link></MenuItem>
            <MenuItem sm><Link href={`#Accessibility`}>Accessibility</Link></MenuItem>
            <MenuItem sm><Link href={`#Accessibility`}>I18n</Link></MenuItem>
            <MenuItem sm><Link href={`#Accessibility`}>Responsible Design</Link></MenuItem>
            <MenuItem sm><Link href={`#Accessibility`}>Tree Shaking</Link></MenuItem>
          </Menu>
        </Flex>

        <Col fw fh ova maxH={'100%'}>
          <Col style={{padding: '0 50px'}}>
            <Installation/>

            <div id={'components'} style={{marginTop: 50}}>
              {
                SAMPLES.map((sample, index) => {
                  return <SampleBase key={index} name={sample.name}>{sample.comp}</SampleBase>
                })
              }
            </div>
          </Col>
        </Col>
      </Flex>
    </Flex>
  </LiteUIProvider>
}

export default App
