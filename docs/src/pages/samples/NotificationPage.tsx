import {Button, Col, Row, useNotification} from '@lite-u/ui'
import {useRef} from 'react'

const NotificationPage: React.FC = () => {
  const {add, remove} = useNotification()
  const notificationId = useRef<string>('')
  return <Col>

    <Row space={10}>
      <Button onClick={() => {
        if (notificationId.current) {
          remove(notificationId.current)
        }
        notificationId.current = add('A Notification stay on middle of the screen, 10 Seconds', 'warn', 10000)
      }}>Show Notice</Button>
      <Button warn onClick={() => remove(notificationId.current)}>Hide It</Button>
    </Row>
    <Row space={10}>
      <Button onClick={() => {
        const id = add('Hello Info' + Date.now(), 'info', 10000)

        setTimeout(() => {
          remove(id)
        }, 2000)
      }}>Notice Info</Button>
      <Button warn onClick={() => add('Hello Warn' + Date.now(), 'warn')}>Notice Warn</Button>
      <Button error onClick={() => add('Hello Error' + Date.now(), 'error')}>Notice Error</Button>
    </Row>
  </Col>
}

export default NotificationPage