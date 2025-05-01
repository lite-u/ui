import {Con, IconButton} from '@lite-u/ui'
import {FC, ReactNode} from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import {Collapse} from '../../../src'
import CodeBlock from '../components/codeBlock/codeBlock.tsx'

const SampleBlock: FC<{ children: ReactNode }> = ({children}) => {
  const code = reactElementToJSXString(children, {
    useFragmentShortSyntax: true,
    tabStop: 2,
    sortProps: false,
    showFunctions: true,
    functionValue: () => '[Function]',
    maxInlineAttributesLineLength: 40,
    // tabStop: 2,
    // maxInlineAttributesLineLength:300
  })

  return <Con border rounded ib p={15} w={'auto'}>
    {children}
    <Con w={300}>
      <Collapse head={<IconButton s>{'<>'}</IconButton>}>
        <CodeBlock code={code.replace(/><(?!\/)/g, '>\n<')}/>
      </Collapse>
    </Con>
  </Con>
}

export default SampleBlock