import React from 'react'
import Markdown from 'react-markdown'

const MDBlock: React.FC<React.HTMLProps<HTMLDivElement> & { children:string }> = ({children, ...props}) => {
  return <div {...props}><Markdown>{children}</Markdown></div>
}

export default MDBlock