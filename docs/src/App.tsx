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

      <Col between style={{borderBottom: '1px solid gray', position: 'sticky'}}>
        <header style={{height: 50}}>header</header>
      </Col>

      <Row h={'auto'} style={{overflow: 'hidden'}}>
        <Col w={200} style={{padding: 8, overflowY: 'auto'}}>
          <Menu gap={4}>
            {
              [
                'Installation',
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
          <Col style={{padding: 20}}>
            <Installation/>
            <ButtonsSample/>
            <InputsSample/>


            <Col between style={{borderBottom: '1px solid gray', position: 'sticky'}}>
              <Title h2>Select</Title>
              <Select id={'select'}>
                <SelectItem>helloa</SelectItem>
                <SelectItem>hellob</SelectItem>
                <SelectItem>helloc</SelectItem>
              </Select>
            </Col>
          </Col>
        </Col>
      </Row>
    </Col>
  </ThemeProvider>
}

export default App
