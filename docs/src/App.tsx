import ThemeProvider from '@ui/themes/ThemeContext.tsx'
import {Button, Input} from '@ui/index.tsx'

function App() {
  return <ThemeProvider>
    <div>hello</div>
    <Button size={'sm'}>button</Button>
    <Input/>
  </ThemeProvider>
}

export default App
