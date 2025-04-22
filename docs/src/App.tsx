import ThemeProvider from '@ui/themes/ThemeContext.tsx'
import Col from '@ui/components/layouts/Col.tsx'
import ButtonsSample from './samples/buttonsSample.tsx'
import Row from '@ui/components/layouts/Row.tsx'
import Link from '@ui/components/link/Link.tsx'
import {MenuItem} from '@ui/index.tsx'
import Inputs from './samples/InputsSample.tsx'

function App() {
  return <ThemeProvider>
    <Col>
      <Col around style={{height: 50, borderBottom: '1px solid gray'}}>
        <header>header</header>
      </Col>

      <Row fh>
        <Col w={100}>
          <MenuItem> <Link href={'#buttons'}>Button</Link> </MenuItem>
          <MenuItem> <Link href={'#input'}>Input</Link> </MenuItem>
          <MenuItem> <Link href={'#buttons'}>Button</Link> </MenuItem>
        </Col>

        <Col fw style={{overflow: 'auto'}}>
          <ButtonsSample/>
          <Inputs/>
        </Col>
      </Row>

      <Row fw></Row>
    </Col>
  </ThemeProvider>
}

export default App
