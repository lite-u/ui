import Drop from '@ui/components/drop/Drop.tsx'
import {Col, Con, P, Row} from '@ui/index.tsx'
import {useState} from 'react'
import CodeWrap from '../codeBlock/CodeWrap.tsx'

const DropSamples: React.FC = () => {
  const [isDraggingA, setIsDraggingA] = useState(false)
  const [isDraggingB, setIsDraggingB] = useState(false)
  const [isDraggingC, setIsDraggingC] = useState(false)
  const [sampleAData, setSampleAData] = useState({
    bg: '#cab077',
    defaultBg: '#cab077',
    msg: 'I accept PNG only',
    defaultMsg: 'I accept PNG only',
  })
  const [sampleBData, setSampleBData] = useState({
    bg: '#ab86cc',
    defaultBg: '#ab86cc',
    msg: 'I accept IMAGE only',
    defaultMsg: 'I accept IMAGE only',
  })
  const [sampleCData, setSampleCData] = useState({
    bg: '#4de6d5',
    defaultBg: '#4de6d5',
    msg: 'I accept ALL',
    defaultMsg: 'I accept ALL',
  })
  const [msgA, setMsgA] = useState('I love PNG')
  const [msgB, setMsgB] = useState('I love IMAGE')
  const [msgC, setMsgC] = useState('I love ALL files')
  const [droppedA, setDroppedA] = useState('')
  const [droppedB, setDroppedB] = useState('')
  const [droppedC, setDroppedC] = useState('')

  return <Col>
    <Row w={620} h={200} stretch space={10}>

      <Drop accepts={['image/png']}
            onDrop={(e) => {
              setSampleAData({
                ...sampleAData,
                bg: 'green',
                msg: e.dataTransfer.files[0].name,
              })
            }}
            onDragIsOver={(f) => {
              setSampleAData({
                ...sampleAData,
                bg: f ? 'blue' : 'red',
                msg: f ? 'I Love PNG !' : 'I Love PNG ONLY',
              })
            }}
            onDragIsLeave={() => {
              setSampleAData({
                ...sampleAData,
                bg: sampleAData.defaultBg,
                msg: sampleAData.defaultMsg,
              })
            }}>
        <Con fw fh bg={sampleAData.bg}>
          <Row fh center jc>
            <P color={'white'}>{sampleAData.msg}</P>
          </Row>
        </Con>
      </Drop>

      <Drop accepts={['image/*']}
            onDrop={(e) => {
              setSampleBData({
                ...sampleBData,
                bg: 'green',
                msg: e.dataTransfer.files[0].name,
              })
            }}
            onDragIsOver={(f) => {
              setSampleBData({
                ...sampleBData,
                bg: f ? 'blue' : 'red',
                msg: f ? 'I Love IMAGE !' : 'I Love IMAGE ONLY',
              })
            }}
            onDragIsLeave={() => {
              setSampleBData({
                ...sampleBData,
                bg: sampleBData.defaultBg,
                msg: sampleBData.defaultMsg,
              })
            }}>
        <Con fw fh bg={sampleBData.bg}>
          <Row fh center jc>
            <P color={'white'}>{sampleBData.msg}</P>
          </Row>
        </Con>
      </Drop>

      <Drop onDrop={(e) => {
        setSampleCData({
          ...sampleCData,
          bg: 'green',
          msg: e.dataTransfer.files[0].name,
        })
      }}
            onDragIsOver={(f) => {
              setSampleCData({
                ...sampleCData,
                bg: f ? 'blue' : 'red',
                msg: f ? 'More And More !' : 'What Is This?',
              })
            }}
            onDragIsLeave={() => {
              setSampleCData({
                ...sampleCData,
                bg: sampleCData.defaultBg,
                msg: sampleCData.defaultMsg,
              })
            }}>
        <Con fw fh bg={sampleCData.bg}>
          <Row fh center jc>
            <P color={'white'}>{sampleCData.msg}</P>
          </Row>
        </Con>
      </Drop>

    </Row>

    <Con m={10}></Con>

    <CodeWrap code={`
    import Drop from '@ui/components/drop/Drop.tsx'
import {Con, P, Row} from '@ui/index.tsx'
import {useState} from 'react'

const DropSamples: React.FC = () => {
  const [isDraggingA, setIsDraggingA] = useState(false)
  const [isDraggingB, setIsDraggingB] = useState(false)
  const [isDraggingC, setIsDraggingC] = useState(false)
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
        <Con fw fh bg={droppedA ? 'green' : isDraggingA ? 'blue' : '#cab077'}>
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
        <Con fw fh bg={droppedC ? 'green' : isDraggingC ? 'blue' : '#53aeb1'}>
          <Row fh center jc>
            <P center color={'white'}>{droppedC || msgC}</P>
          </Row>
        </Con>
      </Drop>
    </Con>


  </Row>
}

export default DropSamples
    `}></CodeWrap>

  </Col>
}

export default DropSamples