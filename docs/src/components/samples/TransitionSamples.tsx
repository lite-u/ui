import {Button, Con, Flex} from '@ui/index.tsx'
import Transition from '@ui/components/transition/Transition.tsx'
import {useState} from 'react'
// import TransitionB from '@ui/components/transition/TransitionB.tsx'

const TransitionSample: React.FC = () => {
  return <Flex>
    <TransitionSample1/>
    {/*<TransitionSample2/>*/}
    {/*<TransitionSample3/>*/}
  </Flex>
}

const TransitionSample1 = () => {
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
      <Transition
        from={{
          scale: 0,
          // rotate: '0deg',
        }}
        to={{
          scale: 1,
          // rotate: '180deg',
        }}
        visible={showGreeting}>
        <Con w={100} h={100} bg={'red'}>hello world</Con>
      </Transition>
    </div>
  </Con>
}

const TransitionSample2 = () => {
  const [showGreeting, setShowGreeting] = useState(false)

  return <Con w={100} h={100}>
    <Button onClick={() => {
      setShowGreeting(!showGreeting)
    }}>Toggle</Button>
    <Transition
      visible={showGreeting}
      scale={{from: 0, to: 1}}
    >
      <Transition
        visible={showGreeting}
        width={{from: 0, to: 100}}
        height={{from: 0, to: 100}}
      >
        <Con w={100} h={100} bg={'black'}>show half</Con>
      </Transition>
    </Transition>

  </Con>
}

const TransitionSample3 = () => {
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
      <Transition
        visible={showGreeting}
        scale={{from: 0, to: 1}}
        opacity={{from: 0, to: 1}}
        duration={200}
        effect={'ease'}
      >
        <Con w={100} h={100} bg={'red'}>hello world</Con>
      </Transition>
    </div>
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