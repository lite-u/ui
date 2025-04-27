import {Button, Col, Row} from '@ui/index.tsx'
import {useNotification} from '@ui/components/notification/NotificationContext.tsx'

const NotificationSamples: React.FC = () => {
  const {add} = useNotification()

  return <Col>
    <Row space={10}>
      <Button onClick={() => add('Hello Info'+Date.now(), 'info', 1115000)}>Notice Info</Button>
      <Button warn onClick={() => add('Hello Warn'+Date.now(), 'warn', 1115000)}>Notice Warn</Button>
      <Button error onClick={() => add('Hello Error'+Date.now(), 'error', 1115000)}>Notice Error</Button>
    </Row>

  </Col>
}

export default NotificationSamples