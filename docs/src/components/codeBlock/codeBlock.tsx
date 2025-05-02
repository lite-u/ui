import React from 'react'
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter'
import {githubGist} from 'react-syntax-highlighter/dist/esm/styles/hljs'

// hljs.registerLanguage('typescript', typescript)

const CodeBlock: React.FC<React.HTMLProps<HTMLDivElement> & {
  code: string
  // codeStyle?: CSSProperties
}> = ({code}) => {
  return <SyntaxHighlighter language="javascript" style={{
    ...githubGist,
    hljs: {...githubGist.hljs, backgroundColor: 'transparent'},
  }}>
    {code}
  </SyntaxHighlighter>
}

export default CodeBlock