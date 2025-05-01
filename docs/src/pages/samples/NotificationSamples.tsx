import {Button, Col, Row, useNotification} from '@lite-u/ui'

const NotificationSamples: React.FC = () => {
  const {add} = useNotification()

  return <Col>
    <Row space={10}>
      <Button onClick={() => add('Hello Info' + Date.now(), 'info')}>Notice Info</Button>
      <Button warn onClick={() => add('Hello Warn' + Date.now(), 'warn')}>Notice Warn</Button>
      <Button error onClick={() => add('Hello Error' + Date.now(), 'error')}>Notice Error</Button>
    </Row>
  </Col>
}

export default NotificationSamples