import {Button, Col, Row, useNotification} from '@lite-u/ui'

const NotificationPage: React.FC = () => {
  const {add, remove} = useNotification()

  return <Col>
    <Row space={10}>
      <Button onClick={() => {
        const a = add('Hello Info' + Date.now(), 'info', 10000)

        setTimeout(() => {
          remove(a)
        }, 2000)
        console.log(a)
      }}>Notice Info</Button>
      <Button warn onClick={() => add('Hello Warn' + Date.now(), 'warn')}>Notice Warn</Button>
      <Button error onClick={() => add('Hello Error' + Date.now(), 'error')}>Notice Error</Button>
    </Row>
  </Col>
}

export default NotificationPage