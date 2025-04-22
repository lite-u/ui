import ThemeProvider from '@ui/themes/ThemeContext.tsx'
import Col from '@ui/components/layouts/Col.tsx'
import Row from '@ui/components/layouts/Row.tsx'
import {Link, Menu, MenuItem, Select, SelectItem, Title} from '@ui/index.tsx'
import ButtonsSample from './components/samples/buttonsSample.tsx'
import InputsSample from './components/samples/InputsSample.tsx'
import Installation from './components/Installation.tsx'

function App() {
  return <ThemeProvider>
    <Col fw fh style={{overflow: 'hidden'}}>

      <Col between style={{borderBottom: '1px solid gray'}}>

        <header style={{height: 50}}>header</header>
      </Col>

      <Row h={'auto'} style={{overflow: 'hidden'}}>

        <Col w={200} style={{padding: '50px 10px', overflowY: 'auto'}}>
          <Menu gap={0}>
            <MenuItem sm>
              <Link href={`#Installation`}>Installation</Link>
            </MenuItem>
            <MenuItem sm>
              <Link href={`#components`}>Components</Link>
            </MenuItem>
            {
              [
                'Buttons',
                'Inputs',
                'Select',
                'Link',
                'ThemeProvider',
                'Modal',
                'Panel',
                'Row',
                'Col',
                'Title',
                'Paragraph',
                'P',
                'Menu',
                'MenuItem',
              ].map((item, index) => {
                return (
                  <MenuItem sm key={index}>
                    <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                  </MenuItem>)
              })
            }
          </Menu>
        </Col>

        <Col fw fh style={{maxHeight: '100%', overflow: 'auto'}}>
          <Col style={{padding: '0 50px'}}>

            <Installation/>

            <div id={'components'} style={{marginTop: 50}}>
              {/*<Title h2 sticky>Components</Title>*/}
              <ButtonsSample/>
              <InputsSample/>

              <Col between style={{}}>
                <Title h2 sticky style={{zIndex: 60}}>Select</Title>
                <Row style={{zIndex: 50}}>
                  <Select id={'select'} style={{width: '100px', zIndex: 9}}>
                    {
                      Array.from({length: 100}).fill(undefined).map((_, index) => {
                        return <SelectItem key={index}>
                          <MenuItem>hello {index + 1}</MenuItem>
                        </SelectItem>
                      })
                    }
                  </Select>

                  <Select id={'select'} style={{width: '100px', zIndex: 9}}>
                    {
                      ['px', 'mm', 'cm'].map((_, index) => {
                        return <SelectItem key={index}>
                          <MenuItem>hello {index + 1}</MenuItem>
                        </SelectItem>
                      })
                    }
                  </Select>
                </Row>

              </Col>

              <Col between style={{marginTop: 50}}>
                <Title h2 sticky>Link</Title>
                <Link href={`#link`} id={'link'}>Link</Link>
              </Col>

              <div style={{
                height: '800px',
              }}></div>

            </div>
          </Col>
        </Col>
      </Row>
    </Col>
  </ThemeProvider>
}

export default App
