import ThemeProvider from '@ui/themes/ThemeContext.tsx'
// import Col from '@ui/components/layouts/Col.tsx'
// import Row from '@u/**/i/components/layouts/Row.tsx'
import {Col, Link, Menu, MenuItem, Row} from '@ui/index.tsx'
import ButtonsSample from '@samples/ButtonsSample.tsx'
import InputsSample from '@samples/InputsSample.tsx'
import Installation from '@samples/Installation.tsx'
import SelectSamples from '@samples/SelectSamples.tsx'
import PanelSamples from '@samples/PanelSamples.tsx'
import LinkSamples from '@samples/LinkSamples.tsx'
import ColSamples from '@samples/ColSamples.tsx'
import MenuItemSamples from '@samples/MenuItemSamples.tsx'
import MenuSamples from '@samples/MenuSamples.tsx'
import ModalSamples from '@samples/ModalSamples.tsx'
import RowSamples from '@samples/RowSamples.tsx'
import TitleSamples from '@samples/TitleSamples.tsx'
import ConSamples from '@samples/ConSamples.tsx'

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
              [
                'Buttons',
                'Inputs',
                'Select',
                'Link',
                'ThemeProvider',
                'Modal',
                'Panel',
                'Con',
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
              <SelectSamples/>
              <PanelSamples/>
              <LinkSamples/>
              <ButtonsSample/>
              <ColSamples/>
              <MenuItemSamples/>
              <MenuSamples/>
              <ModalSamples/>
              <RowSamples/>
              <TitleSamples/>
              <ConSamples/>
            </div>
          </Col>
        </Col>
      </Row>
    </Col>
  </ThemeProvider>
}

export default App
