import React, {useState} from 'react'
import {Button, Con} from '@ui/index.tsx'
import dedent from 'dedent'
import CodeBlock from './codeBlock.tsx'

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
    <Con w={400}
         mh={200}
         style={{
           backgroundColor: '#2d2d2d',
           padding: '25px 20px',
           width: '100%',
           boxShadow: '1px 1px 5px 1px #000',
           borderRadius: '5px',
           overflow: 'auto',
           position: 'relative',
         }}>
      <Button s
              onClick={handleCopy}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
              }}>
        {copied ? '✓ Copied' : 'Copy'}
      </Button>

      <CodeBlock code={dedent(code)}
                 style={{
                   // minWidth: 300,
                   margin: 0,
                   padding: 0,
                   // padding: '25px 20px 15px 20px',
                   // borderRadius: '5px',
                 }}/>
    </Con>
  )
}

export default CodeWrap