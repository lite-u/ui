import ThemeProvider from '@ui/themes/ThemeContext.tsx'
import Col from '@ui/components/layouts/Col.tsx'
import ButtonsSample from './components/samples/buttonsSample.tsx'
import Row from '@ui/components/layouts/Row.tsx'
import Link from '@ui/components/link/Link.tsx'
import {MenuItem} from '@ui/index.tsx'
import InputsSample from './components/samples/InputsSample.tsx'

function App() {
  return <ThemeProvider>
    <Col fw fh style={{overflow: 'hidden'}}>

      <Col between style={{borderBottom: '1px solid gray', position: 'sticky'}}>
        <header style={{height: 50}}>header</header>
      </Col>

      <Row h={'auto'} style={{overflow: 'auto'}}>
        <Col w={200}>
          <MenuItem><Link href={'#installation'}>Installation</Link> </MenuItem>
          <MenuItem><Link href={'#buttons'}>Button</Link> </MenuItem>
          <MenuItem><Link href={'#input'}>Input</Link> </MenuItem>
          <MenuItem><Link href={'#buttons'}>Button</Link> </MenuItem>
        </Col>

        <Col fw fh style={{maxHeight: '100%', overflow: 'auto'}}>
          <ButtonsSample/>
          <InputsSample/>
        </Col>
      </Row>
    </Col>
  </ThemeProvider>
}

export default App
