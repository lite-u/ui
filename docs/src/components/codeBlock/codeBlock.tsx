import React, {CSSProperties, useEffect, useRef} from 'react'
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/atom-one-light.min.css'

hljs.registerLanguage('typescript', typescript)

const CodeBlock: React.FC<React.HTMLProps<HTMLDivElement> & {
  code: string
  language?: 'language-typescript'
  codeStyle?: CSSProperties
}> = ({code, style, codeStyle, language = 'language-typescript'}) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      delete ref.current.dataset.highlighted
      hljs.highlightElement(ref.current)
    }
  }, [code, language, ref.current])

  return <pre style={style}>
      <code ref={ref} style={{padding: 0, ...codeStyle}} className={language}>{code}</code>
    </pre>
}

export default CodeBlock