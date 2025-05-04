import {Button, Con, Flex, Row, Transition} from '@lite-u/ui'
import {useState} from 'react'
import {Col} from '../../../../src'
import SampleBlock from '../SampleBlock.tsx'
// import TransitionB from '@ui/components/transition/TransitionB.tsx'

const TransitionSample: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={200}>
        <SampleBlock title={'Scale'}>
          <Row fw jc center>
            <TransitionScale/>
          </Row>
        </SampleBlock>
      </Con>

      <Con w={300}>
        <SampleBlock title={'Set Translates'}>
          <TransitionTranslate/>
        </SampleBlock>
      </Con>

      <Con w={200}>
        <SampleBlock title={'Set Rotate'}>
          <Row fw jc center>
            <TransitionRotate/>
          </Row>
        </SampleBlock>
      </Con>

      <Con w={'auto'}>
        <SampleBlock title={'Position Fixed(Screen Center)'}>
          <TransitionFixed/>
        </SampleBlock>
      </Con>

      <Con w={'auto'}>
        <SampleBlock title={'Delayed 1000ms'}>
          <TransitionDelayed/>
        </SampleBlock>
      </Con>

      <Con w={'auto'}>
        <SampleBlock title={'Enter 3000ms, exit 4000ms'}>
          <TransitionDuration/>
        </SampleBlock>
      </Con>

      <Con w={'auto'}>
        <SampleBlock title={'Time Function'}>
          <TransitionTimeFunction/>
        </SampleBlock>
      </Con>


    </Row>

    {/*<TransitionFixed/>*/}
    {/*<TransitionSample2/>*/}
    {/*<TransitionSample3/>*/}
  </Col>
}

const TransitionScale = () => {
  const [visible, setVisible] = useState(false)

  return <div>
    <Transition visible={visible}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                from={{opacity: .5, scale: 0.5}}
                to={{opacity: 1, scale: 1}}>
      <Row jc center bg={'#0b2e71'} mt={10} w={100} h={100} border rounded></Row>
    </Transition>
  </div>
}

const TransitionTranslate = () => {
  const [visible, setVisible] = useState(false)

  return <Con>
    <Button s onClick={() => {
      setVisible(!visible)
    }}>Move</Button>

    <Transition
      visible={visible}
      style={{width: 50, height: 50}}
      from={{translate: '0 10px'}}
      to={{translate: '200px -20px'}}
    >
      <Row fw
           fh
           center
           jc
           bg={'#ac5353'}
           border
           rounded
      ></Row>
    </Transition>

  </Con>
}

const TransitionRotate = () => {
  const [visible, setVisible] = useState(false)

  return <Con w={100}>
    <Transition
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}
      visible={visible}
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
           }}>Text</Row>
    </Transition>

  </Con>
}

const TransitionFixed = () => {
  const [visible, setVisible] = useState(false)

  return <Con w={100} h={100}>
    <Button s onClick={() => {
      setVisible(!visible)
    }}>Toggle</Button>
    <Con w={100} h={100} fixed tc t={'50%'} l={'50%'}
         style={{
           transform: 'translate(-50%, -50%)',
           pointerEvents: visible ? 'auto' : 'none',
           zIndex: 9999,
         }}>
      <Transition
        from={{scale: 0}}
        to={{scale: 1}}
        visible={visible}>
        <Flex w={100}
              h={100}
              alignItems="center"
              justifyContent="center"
              border
              rounded
              color={'#fff'}
              bg={'#146e18'}>Center</Flex>
      </Transition>
    </Con>
  </Con>
}

const TransitionDelayed = () => {
  const [visible, setVisible] = useState(false)

  return <Con ml={10}>
    <Transition
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}
      delay={1000}
      visible={visible}
      style={{width: 100, height: 30}}
      from={{width: 100}}
      to={{width: 200}}>
      Hover On And Wait
    </Transition>

  </Con>
}

const TransitionDuration = () => {
  const [visible, setVisible] = useState(false)

  return <Con ml={10}>
    <Transition
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}
      duration={3000}
      leaveDuration={4000}
      visible={visible}
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
           }}></Row>
    </Transition>

  </Con>
}

const TransitionTimeFunction = () => {
  const [visible, setVisible] = useState(false)

  return <Con ml={10}>
    <Transition
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}
      delay={1000}
      visible={visible}
      style={{width: 100, height: 30}}
      from={{width: 100}}
      to={{width: 200}}>
      Hover On And Wait
    </Transition>

  </Con>
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