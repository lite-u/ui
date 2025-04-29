import LiteUIProvider, {Flex} from '@ui/index'
import {Col, Link, Menu, MenuItem} from '@ui/index.tsx'
import Installation from '@samples/Installation.tsx'
import SAMPLES from '@samples/index.tsx'
import SampleBase from '@samples/SampleBase.tsx'

function App() {
  return <LiteUIProvider>
    <Flex col fw fh ovh>
      <Flex justifyContent={'between'} style={{borderBottom: '1px solid gray'}}>
        <header style={{height: 50}}>header</header>
      </Flex>

      <Flex h={'auto'} ovh>
        <Flex col fh w={200} style={{overflowY: 'auto'}}>
          <Menu space={0}>
            <MenuItem sm>
              <Link href={`#installation`}>Installation</Link>
            </MenuItem>
            <MenuItem sm>
              <Link href={`#components`}>Components</Link>
            </MenuItem>

            {
              SAMPLES.map((item, index) => {
                return (
                  <MenuItem sm key={index}>
                    <Link href={`#${item.name.toLowerCase()}`}>{item.name}</Link>
                  </MenuItem>)
              })
            }

            <MenuItem sm><Link href={`#Accessibility`}>Compatibility</Link></MenuItem>
            <MenuItem><Link href={`#Accessibility`}>Accessibility</Link></MenuItem>
            <MenuItem><Link href={`#Accessibility`}>I18n</Link></MenuItem>
            <MenuItem><Link href={`#Accessibility`}>Responsible Design</Link></MenuItem>
            <MenuItem><Link href={`#Accessibility`}>Tree Shaking</Link></MenuItem>
          </Menu>
        </Flex>

        <Col fw fh style={{maxHeight: '100%', overflow: 'auto'}}>
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
