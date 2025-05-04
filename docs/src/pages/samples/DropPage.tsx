import {Col, Con, Drop, P, Row} from '@lite-u/ui'
import {useState} from 'react'
import UsageBlock from '../UsageBlock.tsx'

const DropPage: React.FC = () => {
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

  return <Col>
    <Row start space={10} wrap>
      <Con maxW={700} w={'auto'}>
        <UsageBlock title={'Try to Drop File On Blocks'}>
          <Row w={620} h={200} stretch space={10}>

            <Drop accepts={['image/png']}
                  onDropped={(e, f) => {
                    f && setSampleAData({
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
              <Con fw fh tc bg={sampleAData.bg}>
                <Row fh center jc>
                  <P color={'white'}>{sampleAData.msg}</P>
                </Row>
              </Con>
            </Drop>

            <Drop accepts={['image/*']}
                  onDropped={(e, f) => {
                    f && setSampleBData({
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
              <Con fw fh tc bg={sampleBData.bg}>
                <Row fh center jc>
                  <P color={'white'}>{sampleBData.msg}</P>
                </Row>
              </Con>
            </Drop>

            <Drop onDropped={(e, f) => {
              f && setSampleCData({
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
              <Con fw fh tc bg={sampleCData.bg}>
                <Row fh center jc>
                  <P color={'white'}>{sampleCData.msg}</P>
                </Row>
              </Con>
            </Drop>

          </Row>
        </UsageBlock>
      </Con>
    </Row>
  </Col>
}

export default DropPage