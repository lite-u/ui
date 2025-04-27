import {HTMLProps, useCallback, useEffect, useRef, useState} from 'react'
import Con from '../con/Con'

type DropProps = {
  onDragOverChanged?: (v: boolean) => void
  onExcluded?: (msg: string, d: DataTransferItem) => void
  children?: React.ReactNode
  style?: React.CSSProperties
  accepts?: string[]
};

export const Drop: React.FC<HTMLProps<HTMLDivElement> & DropProps> = ({
                                                                        onDragOverChanged,
                                                                        onExcluded,
                                                                        children,
                                                                        style = {},
                                                                        onDragEnter,
                                                                        onDragLeave,
                                                                        onDragOver,
                                                                        onDrop,
                                                                        accepts = [],
                                                                        ...props
                                                                      }) => {
  const [isDragging, setIsDragging] = useState(false)
  const dragCounter = useRef(0)

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.dataTransfer.items[0])
    onDragEnter && onDragEnter(e)

    if (!handleFileType(e)) return

    dragCounter.current++
    if (dragCounter.current === 1) {
      setIsDragging(true)
    }
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    onDragLeave && onDragLeave(e)

    if (!handleFileType(e)) return

    dragCounter.current--
    if (dragCounter.current === 0) {
      setIsDragging(false)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    onDragOver && onDragOver(e)
    if (!handleFileType(e)) return
  }, [])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    if (!handleFileType(e)) return

    dragCounter.current = 0
    setIsDragging(false)
    onDrop && onDrop(e)
  }, [])

  const handleFileType = (e: React.DragEvent<HTMLDivElement>): boolean => {
    e.preventDefault()
    e.stopPropagation()
    const firstFile = e.dataTransfer.items[0]

    if (!(firstFile && firstFile.type)) {
      onExcluded && onExcluded('File type has not been set in the accepts parameter.', firstFile)
      return false
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

  useEffect(() => {
    onDragOverChanged && onDragOverChanged(isDragging)
  }, [isDragging])

  return <Con fw fh
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