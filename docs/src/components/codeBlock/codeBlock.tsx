import React, {CSSProperties, useEffect, useRef} from 'react'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/atom-one-light.min.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {githubGist} from 'react-syntax-highlighter/dist/esm/styles/hljs'

hljs.registerLanguage('typescript', typescript)

const CodeBlock: React.FC<React.HTMLProps<HTMLDivElement> & {
  code: string
  language?: 'language-typescript'
  codeStyle?: CSSProperties
}> = ({code, language = 'language-typescript'}) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      // delete ref.current.dataset.highlighted
      // hljs.highlightElement(ref.current)
    }
  }, [code, language, ref.current])
  console.log(githubGist)
  return <SyntaxHighlighter language="javascript" style={{
    ...githubGist,
    hljs: {...githubGist.hljs, backgroundColor: 'transparent'},
  }}>
    {code}
  </SyntaxHighlighter>
}

export default CodeBlock