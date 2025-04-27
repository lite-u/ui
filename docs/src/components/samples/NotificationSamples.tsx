import {Button, Col} from '@ui/index.tsx'
import {useNotification} from '@ui/components/notification/NotificationContext.tsx'

const NotificationSamples: React.FC = () => {
  const {add} = useNotification()

  return <Col>
    <Button onClick={() => {
      // alert(9)
      add('AAAABBBB')
    }}>Add</Button>
  </Col>
}

export default NotificationSamples