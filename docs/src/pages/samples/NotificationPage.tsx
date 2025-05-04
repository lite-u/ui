import {Button, Col, Row, useNotification} from '@lite-u/ui'
import {useRef} from 'react'

const NotificationPage: React.FC = () => {
  const {add} = useNotification()
  // const noticeRef = useRef(null)
  return <Col>
    <Row space={10}>
      <Button onClick={() => {
        const a = add('Hello Info' + Date.now(), 'info')
        console.log(a)
      }}>Notice Info</Button>
      <Button warn onClick={() => add('Hello Warn' + Date.now(), 'warn')}>Notice Warn</Button>
      <Button error onClick={() => add('Hello Error' + Date.now(), 'error')}>Notice Error</Button>
    </Row>
  </Col>
}

export default NotificationPage