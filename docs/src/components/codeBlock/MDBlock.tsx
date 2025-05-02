import React from 'react'
import Markdown from 'react-markdown'

const MDBlock: React.FC<React.HTMLProps<HTMLDivElement> & { children: string }> = ({children, ...props}) => {
  return <div {...props}><Markdown components={{
    code({children}) {
      return <span style={{
        display: 'inline-block',
        padding: ' 0 2px',
        borderRadius: 3,
        color: ' #000000',
        backgroundColor: '#dfdfdf',
        fontFamily: 'monospace',
        fontSize: '.9em',
      }}>{children}</span>
    },
  }}>{children}</Markdown></div>
}

export default MDBlock