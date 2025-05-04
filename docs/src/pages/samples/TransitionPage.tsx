import {Button, Con, Flex, Row, Transition} from '@lite-u/ui'
import {useState} from 'react'
import {Col} from '../../../../src'
import UsageBlock from '../UsageBlock.tsx'
// import TransitionB from '@ui/components/transition/TransitionB.tsx'

const TransitionSample: React.FC = () => {
  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <UsageBlock title={'Simple Scale'}>
          <Col between>
            <TransitionScale/>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={400}>
        <UsageBlock title={'Set Translates'}>
          <TransitionTranslate/>
        </UsageBlock>
      </Con>

      <Con w={400}>
        <UsageBlock title={'Set Rotate'}>
          <TransitionRotate/>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'Position Fixed(Screen Center)'}>
          <TransitionFixed/>
        </UsageBlock>
      </Con>


    </Row>

    {/*<TransitionFixed/>*/}
    {/*<TransitionSample2/>*/}
    <TransitionSample3/>
  </Col>
}

const TransitionScale = () => {
  const [visible, setVisible] = useState(false)

  return <div>
    <Button s onClick={() => setVisible(!visible)}>Scale {visible ? 'Down' : 'Up'}</Button>
    <Transition visible={visible}
                from={{opacity: .5, scale: 0.5}}
                to={{opacity: 1, scale: 1}}>
      <Row jc center w={100} h={100} border rounded>Hello World</Row>
    </Transition>
  </div>
}

const TransitionTranslate = () => {
  const [showGreeting, setShowGreeting] = useState(false)

  return <Con>
    <Button onClick={() => {
      setShowGreeting(!showGreeting)
    }}>Toggle</Button>

    <Transition
      visible={showGreeting}
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
}

const TransitionRotate = () => {
  const [showVisible, setShowVisible] = useState(false)

  return <Con>
    {/*
    <Button onMouseEnter={() => {
      setShowVisible(!showVisible)
    }}>Toggle</Button>
*/}

    <Transition
      onMouseEnter={() => {
        setShowVisible(true)
      }}
      onMouseLeave={() => {
        setShowVisible(false)
      }}
      visible={showVisible}
      style={{width: 100, height: 100}}
      from={{rotate: '0deg'}}
      to={{rotate: '180deg'}}>
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
}

const TransitionFixed = () => {
  const [showGreeting, setShowGreeting] = useState(false)

  return <Con w={100} h={100}>
    <Button onClick={() => {
      setShowGreeting(!showGreeting)
    }}>Toggle</Button>
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: showGreeting ? 'auto' : 'none',
      textAlign: 'center',
      zIndex: 9999,
    }}>
      <Transition
        from={{scale: 0}}
        to={{scale: 1}}
        visible={showGreeting}>
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
}

const TransitionSample3 = () => {
  const [showGreeting, setShowGreeting] = useState(false)

  return <Con w={100} h={100}>
    <Button onClick={() => {
      setShowGreeting(!showGreeting)
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
      visible={showGreeting}
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
        visible={showGreeting}>
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

/*
const TransitionSampleB = () => {
  const [showGreeting, setShowGreeting] = useState(false)

  return <Con w={100} h={100}>
    <Button onClick={() => {
      setShowGreeting(!showGreeting)
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
        visible={showGreeting}
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
        visible={showGreeting}
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
        visible={showGreeting}
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
        visible={showGreeting}
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