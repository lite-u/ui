import React, {useEffect, useRef} from 'react'
import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('typescript', typescript)

const CodeBlock: React.FC<React.HTMLProps<HTMLDivElement> & {
  code: string
  language?: 'tsx' | 'jsx' | 'js' | 'ts'
}> = ({code, style, language = 'language-typescript'}) => {
  const ref = useRef<HTMLElement>(null)

  console.log(9)
  useEffect(() => {
    console.log(ref.current)
    if (ref.current) {
      hljs.highlightBlock(ref.current)
    }
  }, [code, language, ref.current])

  return <pre /*style={style}*/>
      <code ref={ref} className={language}>
        {code}
      </code>
    </pre>
}

export default CodeBlock