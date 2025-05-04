import {Button, Con, Flex, Row, Transition} from '@lite-u/ui'
import {useState} from 'react'
import {Col} from '../../../../src'
import UsageBlock from '../UsageBlock.tsx'
// import TransitionB from '@ui/components/transition/TransitionB.tsx'

const TransitionSample: React.FC = () => {
  const [visibleScale, setVisibleScale] = useState(false)
  const [visibleTranslate, setVisibleTranslate] = useState(false)
  const [visibleRotate, setVisibleRotate] = useState(false)
  const [visibleFixed, setVisibleFixed] = useState(false)
  const [visibleDelayed, setVisibleDelayed] = useState(false)
  const [visibleDuration, setVisibleDuration] = useState(false)

  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <UsageBlock title={'Simple Scale'}>
          <Col between>
            <Button s onClick={() => setVisibleScale(!visibleScale)}>Scale {visibleScale ? 'Down' : 'Up'}</Button>
            <Transition visible={visibleScale}
                        from={{opacity: .5, scale: 0.5}}
                        to={{opacity: 1, scale: 1}}>
              <Row jc center w={100} h={100} border rounded>Hello World</Row>
            </Transition>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={400}>
        <UsageBlock title={'Set Translates'}>
          <Con>
            <Button onClick={() => {
              setVisibleTranslate(!visibleTranslate)
            }}>Toggle</Button>

            <Transition
              visible={visibleTranslate}
              style={{width: 100, height: 100}}
              from={{translate: '200px -50px'}}
              to={{translate: '0 0'}}>
              <Row fw
                   fh
                   center
                   jc
                   bg={'#fff'}
                   style={{
                     boxShadow: '0 0 3px 0 #000',
                   }}>hello world</Row>
            </Transition>

          </Con>

        </UsageBlock>
      </Con>

      <Con w={400}>
        <UsageBlock title={'Set Rotate'}>
          <Con ml={10}>
            <Transition
              onMouseEnter={() => {
                setVisibleRotate(true)
              }}
              onMouseLeave={() => {
                setVisibleRotate(false)
              }}
              visible={visibleRotate}
              style={{width: 100, height: 100}}
              from={{rotate: '45deg'}}
              to={{rotate: '360deg'}}>
              <Row fw
                   fh
                   center
                   jc
                   bg={'#fff'}
                   style={{
                     boxShadow: '0 0 3px 0 #000',
                   }}>hello world</Row>
            </Transition>

          </Con>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'Position Fixed(Screen Center)'}>
          <Con w={100} h={100}>
            <Button onClick={() => {
              setVisibleFixed(!visibleFixed)
            }}>Toggle</Button>
            <div style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: visibleFixed ? 'auto' : 'none',
              textAlign: 'center',
              zIndex: 9999,
            }}>
              <Transition
                from={{scale: 0}}
                to={{scale: 1}}
                visible={visibleFixed}>
                <Flex w={100}
                      h={100}
                      alignItems="center"
                      justifyContent="center"
                      style={{
                        backgroundColor: '#fff',
                        boxShadow: '0 0 3px 0 #000',
                      }}>Hello World</Flex>
              </Transition>
            </div>
          </Con>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'Delayed 1000ms'}>
          <Con ml={10}>
            <Transition
              onMouseEnter={() => {
                setVisibleDelayed(true)
              }}
              onMouseLeave={() => {
                setVisibleDelayed(false)
              }}
              delay={1000}
              visible={visibleDelayed}
              style={{width: 100, height: 100}}
              from={{width: 100}}
              to={{width: 120}}>
              <Row fw
                   fh
                   center
                   jc
                   bg={'#fff'}
                   style={{
                     boxShadow: '0 0 3px 0 #000',
                   }}>hello world</Row>
            </Transition>

          </Con>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'Enter duration 3000ms, exit duration:1000ms'}>
          <Con ml={10}>
            <Transition
              onMouseEnter={() => {
                setVisibleDuration(true)
              }}
              onMouseLeave={() => {
                setVisibleDuration(false)
              }}
              duration={3000}
              leaveDuration={4000}
              visible={visibleDuration}
              style={{width: 100, height: 100}}
              from={{rotate: '0deg'}}
              to={{rotate: '360deg'}}>
              <Row fw
                   fh
                   center
                   jc
                   bg={'#fff'}
                   style={{
                     boxShadow: '0 0 3px 0 #000',
                   }}>hello world</Row>
            </Transition>

          </Con>
        </UsageBlock>
      </Con>


    </Row>

    {/*<TransitionFixed/>*/}
    {/*<TransitionSample2/>*/}
    {/*<TransitionSample3/>*/}
  </Col>
}

/*
const TransitionSample3 = () => {
  const [visible, setVisible] = useState(false)

  return <Con w={100} h={100}>
    <Button onClick={() => {
      setVisible(!visible)
    }}>Toggle</Button>

    <Transition
      from={{
        marginLeft: {
          value: 10,
          delay: 1000,
          duration: 2000,
        },
        scale: .5,
      }}
      to={{
        marginLeft: {
          value: -1000,
          delay: 500,
          duration: 2000,
        },
        scale: 1,
      }}
      visible={visible}
      duration={3000}
    >
      <Transition
        from={{
          translate: '-100px -100px',
          scale: .5,
        }}
        to={{
          translate: '0 0',
          scale: 1,
        }}
        visible={visible}>
        <Flex w={100}
              h={100}
              alignItems="center"
              justifyContent="center"
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 0 3px 0 #000',
              }}>hello world</Flex>
      </Transition>
    </Transition>
  </Con>
}
*/

/*
const TransitionSampleB = () => {
  const [visible, setVisible] = useState(false)

  return <Con w={100} h={100}>
    <Button onClick={() => {
      setVisible(!visible)
    }}>Toggle</Button>

    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      zIndex: 9999,
    }}>
      {/!*  <TransitionB
        visible={visible}
        from={{
          scale: 0,
          opacity: 0,
        }}
        to={{
          scale: 1,
          opacity: 1,
        }}
      >
        <Con w={100} h={100} bg={'red'}>hello world</Con>
      </TransitionB>
*!/}
      {/!* <TransitionB
        visible={visible}
        from={{
          width: 0,

          height: 0,
        }}
        to={{
          width: 100,
          height: 100,
        }}
      >
        <Con w={100} h={100} bg={'red'}>hello world</Con>
      </TransitionB>*!/}

      {/!* <TransitionB
        visible={visible}
        from={{
          rotate: '0deg',
          scale: 0,
          translate: '-250% -250%',
        }}
        to={{
          rotate: '180deg',
          scale: 1,
          translate: '-50% -50%',
        }}
        duration={200}
      >
        <Con w={100} h={100} bg={'red'}>hello world</Con>
      </TransitionB>*!/}

      <TransitionB
        visible={visible}
        from={{
          marginLeft: 10,
        }}
        to={{
          marginLeft: 100,
        }}
        duration={200}
      >
        <Con w={100} h={100} bg={'red'}>hello world</Con>
      </TransitionB>
    </div>
  </Con>
}
*/

/*    width: {
                value: 0,
                delay: 500,
                effect: 'ease',
                duration: 1000,
              },*/
export default TransitionSample