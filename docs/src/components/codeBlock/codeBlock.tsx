import React, {useEffect, useRef, useState} from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import {Button} from '@ui/index.tsx'

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
    <div style={{width: '100%', position: 'relative'}}>
      <Button s onClick={handleCopy} style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
        {copied ? '✓ Copied' : 'Copy'}
      </Button>

      <pre style={{
        minWidth: 300,
        margin: 0,
        padding: '30px 20px',
        borderRadius: '5px',
      }}>
        <code ref={ref} className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock