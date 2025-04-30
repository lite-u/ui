'use client'

import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from 'react-router'
import Components from './pages/Components.tsx'
import InputsSample from './pages/InputsSample.tsx'
import LiteUIProvider from '@ui/index.tsx'

createRoot(document.getElementById('root')!).render(
  <LiteUIProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>

        <Route path={'components'}>
          <Route index element={<Components/>}/>
          <Route path={'input'} element={<InputsSample/>}/>
          {/*<Route path="login" element={<Login/>}/>*/}
          {/*<Route path="register" element={<Register/>}/>*/}
        </Route>
      </Routes>
      {/*<App/>,*/}
    </BrowserRouter>
  </LiteUIProvider>,
)
