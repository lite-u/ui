import React, {useState} from 'react'
import 'prismjs/themes/prism-tomorrow.min.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import {Button, Con} from '@ui/index.tsx'
import CodeBlock from './codeBlock.tsx'
import dedent from 'dedent'

const CodeWrap: React.FC<React.HTMLProps<HTMLDivElement> & {
  code: string;
}> = ({code}) => {
  const [copied, setCopied] = useState(false)

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
    <Con w={400} style={{width: '100%', position: 'relative'}}>
      <Button s
              onClick={handleCopy}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
              }}>
        {copied ? '✓ Copied' : 'Copy'}
      </Button>

      <CodeWrap code={dedent(code)}
                 style={{
                   // minWidth: 300,
                   margin: 0,
                   // padding: '30px 20px',
                   // borderRadius: '5px',
                 }}/>
    </Con>
  )
}

export default CodeWrap