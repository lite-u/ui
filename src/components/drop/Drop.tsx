import {HTMLProps, useCallback, useRef} from 'react'
import Con from '../con/Con'

type DropProps = {
  accepts?: string[]
  onDragIsOver?: (isFileTypeValid: boolean) => void
  onDragIsLeave?: () => void
  onDrop?: (e: React.DragEvent<HTMLDivElement>, isFileTypeValid: boolean) => void
  children?: React.ReactNode
  style?: React.CSSProperties
};

export const Drop: React.FC<HTMLProps<HTMLDivElement> & DropProps> = ({
                                                                        accepts = [],
                                                                        onDragIsOver,
                                                                        onDragIsLeave,
                                                                        children,
                                                                        onDrop,
                                                                        style = {},
                                                                        // native events
                                                                        onDragEnter,
                                                                        onDragLeave,
                                                                        onDragOver,
                                                                        ...props
                                                                      }) => {
  const dragCounter = useRef(0)

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    onDragEnter && onDragEnter(e)

    const f = handleFileType(e)
    e.dataTransfer.dropEffect = f ? 'copy' : 'none'
    dragCounter.current++

    if (dragCounter.current === 1) {
      onDragIsOver && onDragIsOver(f)
    }
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    onDragLeave && onDragLeave(e)

    handleFileType(e)
    dragCounter.current--

    if (dragCounter.current === 0) {
      onDragIsLeave && onDragIsLeave()
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    onDragOver && onDragOver(e)
    const f = handleFileType(e)
    e.dataTransfer.dropEffect = f ? 'copy' : 'none'
  }, [])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    const f = handleFileType(e)

    dragCounter.current = 0

    if (f) {
      onDrop && onDrop(e)
    } else {
      onDragIsLeave && onDragIsLeave()
    }

  }, [])

  const handleFileType = (e: React.DragEvent<HTMLDivElement>): boolean => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e)
    console.log(e.dataTransfer.files.length)
    console.log(e.dataTransfer.files[0])
    const firstFile = e.dataTransfer.items[0]
    console.log(firstFile)
    if (!firstFile) {
      return true
    }

    const fileType = firstFile.type

    // always true when user set accepts as empty
    if (accepts.length === 0) return true

    for (let i = 0; i < accepts.length; i++) {
      const currRule = accepts[i]

      if (currRule.includes('*')) {
        return fileType.startsWith(currRule.replace('*', ''))
      }

      if (currRule === fileType) {
        return true
      }
    }

    return false
  }

  const styles: React.CSSProperties = {
    ...style,
  }

  return <Con fw fh
              data-role={'drop'}
              style={styles}
              {...props}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
  >
    {children}
  </Con>
}

export default Drop