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

  return <Row w={620} h={200} stretch space={10}>
    <Con bg={'#dfdfdf'}>
      <Drop accepts={['image/png']}
            onDrop={(e) => {
              console.log('drop')
              setMsgA(e.dataTransfer.files[0].name)
              // console.log('drop', e.dataTransfer.files[0].type)
            }}
            onExcluded={(msg, d) => {
              console.log(msg, d)
            }}
            onDragOverChanged={(v) => {
              setIsDraggingA(v)
              // setValidA(v)
              console.log('onDragOverChanged')

              setMsgA(v ? 'I love PNG' : 'I accept PNG only')
            }}>
        <Con fw fh bg={isDraggingA ? 'blue' : '#ff8e8e'}>
          <Row fh center jc>
            <P color={'white'}>{msgA}{}</P>
          </Row>
        </Con>
      </Drop>
    </Con>

    <Con bg={'#dfdfdf'}>
      <Drop accepts={['image/*']}
            onDrop={(e) => {
              console.log('drop', e.dataTransfer.files[0].type)
            }}
            onExcluded={(msg, d) => {
              console.log(msg, d)
            }}
            onDragOverChanged={(v) => {
              setIsDraggingB(v)
              setValidB(v)
            }}>
        <Con fw fh bg={isDraggingB ? 'blue' : '#ff8e8e'}>
          <Row fh center jc>
            <P color={'white'}>{isDraggingB ? 'I love IMAGES' : 'I Accept ALL Images'}</P>
          </Row>
        </Con>
      </Drop>
    </Con>

    <Con bg={'#dfdfdf'}>
      <Drop onExcluded={(v, a) => {
        console.log(v, a)
      }} onDragOverChanged={(v) => {
        setIsDraggingC(v)
        setValidC(v)
      }}>
        <Con fw fh bg={isDraggingC ? 'blue' : '#6dc2ff'}>
          <Row fh center jc>
            <P color={'white'}>{validC ? 'I love ALL files' : 'I accept ALL'}</P>
          </Row>
        </Con>
      </Drop>
    </Con>


  </Row>
}

export default DropSamples