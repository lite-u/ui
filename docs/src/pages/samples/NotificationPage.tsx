import {Button, Col, Con, Row, useNotification} from '@lite-u/ui'
import {useRef} from 'react'
import UsageBlock from '../UsageBlock.tsx'

const NotificationPage: React.FC = () => {

  return <Col>
    <Row start space={10} wrap>

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
          <NotificationSample/>
        </UsageBlock>
      </Con>

    </Row>
  </Col>
}

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

export default NotificationPage