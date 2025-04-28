import LiteUIProvider from '@ui/index'
import {Col, Link, Menu, MenuItem, Row} from '@ui/index.tsx'
import Installation from '@samples/Installation.tsx'
import SAMPLES from '@samples/index.tsx'
import SampleBase from '@samples/SampleBase.tsx'

// import TransitionSample from '@samples/TransitionSamples.tsx'

function App() {
  return <LiteUIProvider>
    <Col fw fh style={{overflow: 'hidden'}}>
      <Col between style={{borderBottom: '1px solid gray'}}>
        <header style={{height: 50}}>header</header>
      </Col>

      <Row h={'auto'} style={{overflow: 'hidden'}}>

        <Col w={200} style={{padding: '50px 10px', overflowY: 'auto'}}>
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
          </Menu>
        </Col>

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
      </Row>
    </Col>
  </LiteUIProvider>
}

export default App
