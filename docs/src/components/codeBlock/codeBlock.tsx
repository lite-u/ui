import React, {useEffect, useRef, useState} from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

type CodeBlockProps = {
  code: string;
  language?: 'tsx' | 'jsx' | 'js' | 'ts';
};

const CodeBlock: React.FC<CodeBlockProps> = ({code, language = 'tsx'}) => {
  const ref = useRef<HTMLElement>(null)

  /*
      useEffect(() => {
      Prism.highlightAll();
    }, []);
  * */
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }, [code])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }
  return (
    <pre style={styles.pre}>
      <code ref={ref} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}

const styles: { pre: React.CSSProperties } = {
  pre: {
    /*background: '#2d2d2d',
    color: '#ccc',
    padding: '1rem',
    borderRadius: '8px',
    fontSize: '14px',
    overflowX: 'auto',
    fontFamily: 'Fira Code, monospace',*/
  },
}

export default CodeBlock