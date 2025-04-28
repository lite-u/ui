import React, {useEffect, useRef} from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

const CodeBlock: React.FC<React.HTMLProps<HTMLDivElement> & {
  code: string
  language?: 'tsx' | 'jsx' | 'js' | 'ts'
}> = ({code, style, language = 'tsx'}) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }, [code])

  return <pre style={style}>
      <code ref={ref} className={`language-${language}`}>{code}</code>
    </pre>
}

export default CodeBlock