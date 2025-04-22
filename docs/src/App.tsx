import ThemeProvider from '@ui/themes/ThemeContext.tsx'
import Col from '@ui/components/layouts/Col.tsx'
import Buttons from './samples/buttons.tsx'
import Row from '@ui/components/layouts/Row.tsx'
import Link from '@ui/components/link/Link.tsx'
import {MenuItem} from '@ui/index.tsx'

function App() {
  return <ThemeProvider>
    <Col>
      <Col style={{height: 50}}>
        Header
      </Col>

      <Row fh>
        <Col w={100}>
          <MenuItem> <Link href={'#buttons'}>Button</Link> </MenuItem>
          <MenuItem> <Link href={'#input'}>Input</Link> </MenuItem>
          <MenuItem> <Link href={'#buttons'}>Button</Link> </MenuItem>
        </Col>

        <Col fw>
          <Buttons id={'buttons'}/>
        </Col>
      </Row>

      <Row fw></Row>
    </Col>
  </ThemeProvider>
}

export default App
