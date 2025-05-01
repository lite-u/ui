import React, {useEffect, useRef} from 'react'
import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('typescript', typescript)

const CodeBlock: React.FC<React.HTMLProps<HTMLDivElement> & {
  code: string
  language?: 'language-typescript'
}> = ({code, style, language = 'language-typescript'}) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      delete ref.current.dataset.highlighted
      hljs.highlightBlock(ref.current)
    }
  }, [code, language, ref.current])

  return <pre style={style}>
      <code ref={ref} style={{padding: 0}} className={language}>{code}</code>
    </pre>
}

export default CodeBlock