import Drop from '@ui/components/drop/Drop.tsx'
import {Con, P, Row} from '@ui/index.tsx'
import {useState} from 'react'

const DropSamples: React.FC = () => {
  const [isDraggingA, setIsDraggingA] = useState(false)
  const [isDraggingB, setIsDraggingB] = useState(false)
  const [isDraggingC, setIsDraggingC] = useState(false)
  const [validA, setValidA] = useState(false)
  const [validB, setValidB] = useState(false)
  const [validC, setValidC] = useState(false)
  const [msgA, setMsgA] = useState('I love PNG')
  const [msgB, setMsgB] = useState('I love IMAGES')
  const [msgC, setMsgC] = useState('I love ALL files')
  const [droppedA, setDroppedA] = useState('')
  const [droppedB, setDroppedB] = useState('')
  const [droppedC, setDroppedC] = useState('')

  return <Row w={620} h={200} stretch space={10}>
    <Con bg={'#dfdfdf'}>
      <Drop accepts={['image/png']}
            onDrop={(e) => {
              setDroppedA(e.dataTransfer.files[0].name)
            }}
            onExcluded={(msg, d) => {
              console.log(msg, d)
            }}
            onDragOverChanged={(v) => {
              setIsDraggingA(v)
              setMsgA(v ? 'I love PNG' : 'I accept PNG only')

              if (v) {
                setDroppedA('')
              }
            }}>
        <Con fw fh bg={droppedA ? 'green' : isDraggingA ? 'blue' : '#ff8e8e'}>
          <Row fh center jc>
            <P color={'white'}>{droppedA || msgA}</P>
          </Row>
        </Con>
      </Drop>
    </Con>

    <Con bg={'#dfdfdf'}>
      <Drop accepts={['image/*']}
            onDrop={(e) => {
              setDroppedB(e.dataTransfer.files[0].name)
            }}
            onExcluded={(msg, d) => {
              console.log(msg, d)
            }}
            onDragOverChanged={(v) => {
              setIsDraggingB(v)
              setMsgB(v ? 'I love IMAGES' : 'I Accept ALL Images')

              if (v) {
                setDroppedB('')
              }
            }}>
        <Con fw fh bg={droppedB ? 'green' : isDraggingB ? 'blue' : '#ff8e8e'}>
          <Row fh center jc>
            <P color={'white'}>{droppedB || msgB}</P>
          </Row>
        </Con>
      </Drop>
    </Con>

    <Con bg={'#dfdfdf'} ovh>
      <Drop onDrop={(e) => {
        setDroppedC(e.dataTransfer.files[0].name)
      }}
            onExcluded={(msg, d) => {
              console.log(msg, d)
            }}
            onDragOverChanged={(v) => {
              setIsDraggingC(v)
              setMsgC(v ? 'I love ALL' : 'I Accept ALL types')

              if (v) {
                setDroppedC('')
              }
            }}>
        <Con fw fh bg={droppedC ? 'green' : isDraggingC ? 'blue' : '#ff8e8e'}>
          <Row fh center jc>
            <P center color={'white'}>{droppedC || msgC}</P>
          </Row>
        </Con>
      </Drop>
    </Con>


  </Row>
}

export default DropSamples