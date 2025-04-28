import {Button, Col} from '@ui/index.tsx'
import Transition from '@ui/components/transition/Transition.tsx'
import {useState} from 'react'

const TransitionSample: React.FC = () => {
  const [showGreeting, setShowGreeting] = useState(false)
  return <Col>
    <Button onClick={() => {
      setShowGreeting(!showGreeting)
    }}>Toggle</Button>
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      textAlign: 'center',
      zIndex: 9999,
    }}>
      <Transition
        visible={showGreeting}
        // visible={false}
        scale={{from: 0, to: 1}}
        opacity={{from: 0, to: 1}}
        duration={200}
        effect={'ease'}
      >
        <span>hello world</span>
      </Transition>
    </div>

    <Transition
      visible={showGreeting}
      width={{from: 0, to: 100}}
      height={{from: 0, to: 100}}
      duration={200}
      effect={'ease'}
    >
      <span style={{width: 100, display: 'block'}}>show half</span>
    </Transition>
  </Col>
}

export default TransitionSample