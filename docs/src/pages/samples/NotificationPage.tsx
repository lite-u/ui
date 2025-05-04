import {Button, Col, Con, Row, useNotification} from '@lite-u/ui'
import {useRef} from 'react'
import UsageBlock from '../UsageBlock.tsx'

const NotificationPage: React.FC = () => {

  return <Col>
    <Row start space={10} wrap>

      <Con w={200}>
        <UsageBlock title={'Show a new Notification'} replacement={``}>
          <NotificationSampleSimple/>
        </UsageBlock>
      </Con>

      <Con w={'auto'}>
        <UsageBlock title={'Toggle a Notification'} replacement={`
        const NotificationSample: React.FC = () => {
          const {add, remove} = useNotification()
          const notificationId = useRef<string>(undefined)
        
          return <Col between>
            {
              !notificationId.current ?
                <Button onClick={() => {
                  if (notificationId.current) {
                    remove(notificationId.current)
                  }
                  notificationId.current = add(
                    <p style={{width: 200, height: 200}}>Hello </p>,
                    'info',
                    false,
                  )
                }}>Show</Button>
                :
                <Button warn onClick={() => {
                  remove(notificationId.current as string)
                  notificationId.current = undefined
                }}>Hide</Button>
            }
        
          </Col>
        }

        `}>
          <NotificationSampleToggle/>
        </UsageBlock>
      </Con>

    </Row>
  </Col>
}

const NotificationSampleSimple: React.FC = () => {
  const {add} = useNotification()

  return <Col between>
    <Button onClick={() => { add('Hello: ' + new Date().toLocaleString('en-US')) }}>Show</Button>
  </Col>
}

const NotificationSampleToggle: React.FC = () => {
  const {add, remove} = useNotification()
  const notificationId = useRef<string>(undefined)

  return <Col between>
    {
      !notificationId.current ?
        <Button primary onClick={() => {
          if (notificationId.current) {
            remove(notificationId.current)
          }
          notificationId.current = add(
            'A notification that stays centered on the screen until it is manually removed.',
            'info',
            false,
          )
        }}>Show</Button>
        :
        <Button warn onClick={() => {
          remove(notificationId.current as string)
          notificationId.current = undefined
        }}>Hide</Button>
    }

  </Col>
}
const NotificationSampleComp: React.FC = () => {
  const {add, remove} = useNotification()
  const notificationId = useRef<string>(undefined)

  return <Col between>
    {
      !notificationId.current ?
        <Button primary onClick={() => {
          if (notificationId.current) {
            remove(notificationId.current)
          }
          notificationId.current = add(
            <p style={{width: 200, height: 200}}>Hello </p>,
            'info',
            false,
          )
        }}>Show</Button>
        :
        <Button warn onClick={() => {
          remove(notificationId.current as string)
          notificationId.current = undefined
        }}>Hide</Button>
    }

  </Col>
}

export default NotificationPage