import React, {useState} from 'react'
import {Con, IconButton, Tooltip, Transition} from '@lite-u/ui'
import dedent from 'dedent'
import CodeBlock from './codeBlock.tsx'

const CodeWrap: React.FC<React.HTMLProps<HTMLDivElement> & {
  code: string;
}> = ({code, style}) => {
  const handledCode = dedent(code)
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(handledCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <Con
      role={'code-wrap'}
      ovh
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}
      style={{
        position: 'relative',
        border: '1px solid #dfdfdf',
        width: '100%',
        padding: '15px 0 15px 20px',
        ...style,
      }}>
      <Transition visible={visible}
                  from={{scale: 0}}
                  to={{scale: 1}}
                  duration={200}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
        <Tooltip position={'t'} title={copied ? 'Copied' : 'Copy'}>
          <IconButton s
                      title={copied ? 'Copied' : 'Copy'}
                      onClick={handleCopy}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#393939',
                      }}>
            {
              copied ?
                <span>✓</span>
                :
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                     width={14}
                     height={14}
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
                </svg>
            }
          </IconButton>
        </Tooltip></Transition>

      <Con
        // maxH={200}
        style={{
          backgroundColor: '#fff',
          borderRadius: 2,
          overflow: 'auto',
        }}>
        <CodeBlock code={handledCode}/>
      </Con></Con>
  )
}

export default CodeWrap