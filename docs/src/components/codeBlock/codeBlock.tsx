import React, {useEffect, useRef, useState} from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import {Button, Col, Row} from '@ui/index.tsx'

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
    <Col w={'auto'} style={{marginTop: 30}}>
      <Row fw between>
        <div></div>
        <Button s onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </Button>
      </Row>

      <pre style={styles.pre}>
        <code ref={ref} className={`language-${language}`}>{code}</code>
      </pre>
    </Col>
  )
}

const styles: { pre: React.CSSProperties } = {
  pre: {
    width: '100%',
    margin: '0 auto',
    padding: 20,
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