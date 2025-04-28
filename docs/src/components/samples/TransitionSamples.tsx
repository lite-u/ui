import {Button, Con, Flex} from '@ui/index.tsx'
import Transition from '@ui/components/transition/Transition.tsx'
import {useState} from 'react'

const TransitionSample: React.FC = () => {
  const [showGreeting, setShowGreeting] = useState(false)
  const [showGreetings2, setShowGreetings2] = useState(false)
  return <Flex>
    <Con w={100} h={100}>
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
          rotate={{
            from: `rotate(${0}deg)`,
            to: `rotate(${180}deg)`,
          }}
          // transformOrigin={'center'}
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

    <Con w={100} h={100}>
      <Button onClick={() => {
        setShowGreetings2(!showGreetings2)
      }}>Toggle</Button>
      <Transition
        visible={showGreetings2}
        scale={{from: 0, to: 1}}
      >
        <Transition
          visible={showGreetings2}
          width={{from: 0, to: 100}}
          height={{from: 0, to: 100}}
        >
          <Con w={100} h={100} bg={'black'}>show half</Con>
        </Transition>
      </Transition>

    </Con>
  </Flex>
}

export default TransitionSample