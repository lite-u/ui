import {Button, Col, Con, Row, useNotification} from '@lite-u/ui'
import {useRef} from 'react'
import UsageBlock from '../UsageBlock.tsx'

const NotificationPage: React.FC = () => {
  const {add, remove} = useNotification()
  const notificationId = useRef<string>(undefined)

  console.log(notificationId.current)

  return <Col>
    <Row start space={10} wrap>

      <Con w={'auto'}>
        <UsageBlock title={'Titles'}>
          <Col between>
            {
              notificationId.current ?
                <Button onClick={() => {
                  if (notificationId.current) {
                    remove(notificationId.current)
                  }
                  notificationId.current = add(
                    'A Notification stay on middle of the screen, 10 Seconds',
                    'warn',
                    false,
                  )
                }}>Show Notice</Button>
                :
                <Button warn onClick={() => remove(notificationId.current as string)}>Hide It</Button>
            }

          </Col>
        </UsageBlock>
      </Con>

    </Row>

    {/* <Row space={10}>
      <Button onClick={() => {
        const id = add('Hello Info' + Date.now(), 'info', false)

        setTimeout(() => {
          remove(id)
        }, 2000)
      }}>Notice Info</Button>
      <Button warn onClick={() => add('Hello Warn' + Date.now(), 'warn')}>Notice Warn</Button>
      <Button error onClick={() => add('Hello Error' + Date.now(), 'error')}>Notice Error</Button>
    </Row>*/}
  </Col>
}

export default NotificationPage