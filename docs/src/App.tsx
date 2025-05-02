import Installation from './pages/samples/Installation.tsx'
import LiteUIProvider from '@lite-u/ui'
import {HashRouter,BrowserRouter, Route, Routes, useLocation} from 'react-router'
import RootLayout from './pages/layouts/RootLayout.tsx'
import ComponentLayout from './pages/layouts/componentLayout/ComponentLayout.tsx'
import COMPONENT_ROUTE_MAP from './pages/layouts/componentLayout/componentData.tsx'

function App() {
  return <LiteUIProvider>
    <HashRouter>
      {/*<ScrollToTop />*/}

      <Routes>
        <Route path={'/'} element={<RootLayout/>}>
          <Route path={'installation'} element={<Installation/>}/>

          <Route path={'components'} element={<ComponentLayout/>}>
            {
              Object.values(COMPONENT_ROUTE_MAP).map((COMP, index) => {
                return <Route key={index} path={COMP.to} element={COMP.comp}/>
              })
            }
          </Route>
        </Route>
      </Routes>
      {/*<App/>,*/}
    </HashRouter>
  </LiteUIProvider>
}

export default App
