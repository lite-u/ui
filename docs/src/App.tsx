import ThemeProvider from '@ui/themes/ThemeContext.tsx'
import {Col, Link, Menu, MenuItem, Row} from '@ui/index.tsx'
import Installation from '@samples/Installation.tsx'
import SAMPLES from '@samples/index.tsx'
import SampleBase from '@samples/SampleBase.tsx'

function App() {
  return <ThemeProvider>
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
              {/*<Title h2 sticky>Components</Title>*/}
              {/*<SampleBase
              ><ButtonsSample/>
              </SampleBase>
              <SampleBase
              ><InputsSample/>
              </SampleBase>
              <SampleBase
              ><SelectSamples/>
              </SampleBase>
              <SampleBase
              ><PanelSamples/>
              </SampleBase>
              <SampleBase
              ><LinkSamples/>
              </SampleBase>
              <SampleBase
              ><ButtonsSample/>
              </SampleBase>
              <SampleBase
              ><ColSamples/>
              </SampleBase>
              <SampleBase
              ><MenuItemSamples/>
              </SampleBase>
              <SampleBase
              ><MenuSamples/>
              </SampleBase>
              <SampleBase
              ><ModalSamples/>
              </SampleBase>
              <SampleBase
              ><RowSamples/>
              </SampleBase>
              <SampleBase
              ><TitleSamples/>
              </SampleBase>
              <SampleBase
              ><ConSamples/>
              </SampleBase>*/}
            </div>
          </Col>
        </Col>
      </Row>
    </Col>
  </ThemeProvider>
}

export default App
