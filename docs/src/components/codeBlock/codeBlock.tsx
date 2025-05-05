import React from 'react'
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import {githubGist} from 'react-syntax-highlighter/dist/esm/styles/hljs'

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