import {HTMLProps, useCallback, useRef} from 'react'
import Con from '../container/Container'


type DropProps = {
  /**
   * List of accepted MIME types. Wildcards like 'image/*' are supported.
   * @default []
   */
  accepts?: string[]
  /**
   * Callback triggered when a valid drag enters the drop zone.
   * @default \-
   */
  onDragIsOver?: (isFileTypeValid: boolean) => void
  /**
   * Callback triggered when dragging leaves the drop zone.
   *
   * >Note: Safari does not reliably detect dragged files, and the onDragIsOver event is not supported in this browser.
   * @default \-
   */
  onDragIsLeave?: () => void
  /**
   * Callback triggered when a file is dropped.
   * Provides the event and a flag indicating file type validity.
   * @default \-
   */
  onDropped?: (e: React.DragEvent<HTMLDivElement>, isFileTypeValid: boolean) => void
  /**
   * Content to be rendered inside the drop zone.
   */
  children?: React.ReactNode
  /**
   * Custom styles for the drop container.
   */
  style?: React.CSSProperties
};

/**
 * Drop component
 *
 * @brief
 * A drag-and-drop file drop zone with file type validation and customizable events.
 *
 * @intro
 * In React, applying visual cues during drag-over can sometimes cause flickering—especially when styles update frequently. The Drop component simplifies handling such interactions by managing drag-over feedback smoothly and supporting MIME-type restrictions. It also provides hooks for custom logic when files are dropped, making it an easy and reliable way to implement drag-and-drop functionality.
 *
 * \
 * `Caution`: Safari cannot detect files during the drag phase, so use onDropped for any functionality that needs to work reliably across all browsers.
 *
 * @example
 * import { Drop } from '@lite-u/ui'
 *
 * <Drop accepts={['image/png']}
 *   onDragIsOver={(f) => {})
 *   onDropped={(e, isValid) => console.log(e, isValid)}
 * >
 *   <p>Drop image files here</p>
 * </Drop>
 */

export const Drop: React.FC<HTMLProps<HTMLDivElement> & DropProps> = ({
                                                                        accepts = [],
                                                                        onDragIsOver,
                                                                        onDragIsLeave,
                                                                        children,
                                                                        onDropped,
                                                                        style = {},
                                                                        // native events
                                                                        onDrop,
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
      onDropped && onDropped(e, f)
    } else {
      onDragIsLeave && onDragIsLeave()
    }
  }, [])

  const handleFileType = (e: React.DragEvent<HTMLDivElement>): boolean => {
    e.preventDefault()
    e.stopPropagation()
    const firstFile = e.dataTransfer.items[0]
    // console.log(e)
    // Safari can't read file list while dragging
    if (!firstFile && e.type !== 'drop') {
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