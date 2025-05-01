import React, {useEffect, useRef} from 'react'
import hljs from 'highlight.js'
import markdown from 'highlight.js/lib/languages/markdown'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('markdown', markdown)

const MDBlock: React.FC<React.HTMLProps<HTMLDivElement> & { children: React.ReactNode }> = ({children, style}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      delete ref.current.dataset.highlighted
      hljs.highlightElement(ref.current)
    }
  }, [children])

  return (
    <div  style={{padding: 0}}>
      <code ref={ref} style={{
        whiteSpace: 'pre',
      }}>
        #HEAD1
        # HEAD1

        ## HEAD 2

        ### HEAD 3
      </code>
      {/*{children}*/}
    </div>
  )
}

export default MDBlock