import {Button, Col, Con, IconButton, Link, Row, Title, useNotification} from '@lite-u/ui'
import {useRef} from 'react'
import UsageBlock from '../UsageBlock.tsx'
import API, {APIType} from '../../components/api/API.tsx'

const NotificationPage: React.FC = () => {
  const addApi: Record<string, APIType> = {
    comp: {
      required: true,
      defaultValue: '\\-',
      type: 'ReactNode',
      description: 'The content to display in the notification.',
    },
    type: {
      required: false,
      defaultValue: 'info',
      type: '"info" | "suc" | "warn" | "error"',
      description: 'Notification type',
    },
    delay: {
      required: false,
      defaultValue: 2000,
      type: 'number | false',
      description: 'Time in milliseconds before auto-removal. Use false to disable timeout.',
    },

  }
  return <Col>
    <Row start space={10} wrap>

      <Con w={200}>
        <UsageBlock title={'New One'} replacement={`
          const NotificationSampleSimple: React.FC = () => {
            const {add} = useNotification()
          
            return <Col between>
              <Button onClick={() => { add('Hello: ' + new Date().toLocaleString('en-US')) }}>Show</Button>
            </Col>
          }
        `}>
          <NotificationSampleSimple/>
        </UsageBlock>
      </Con>

      <Con w={200}>
        <UsageBlock title={'Toggle a Notification'} replacement={`
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

        `}>
          <NotificationSampleToggle/>
        </UsageBlock>
      </Con>

      <Con w={320}>
        <UsageBlock title={'Notification Types'} replacement={`
        const NotificationSampleType: React.FC = () => {
  const {add} = useNotification()

  return <Row between>
    <Button onClick={() => { add('Hello', 'info') }}>Normal</Button>
    <Button primary onClick={() => { add('Hello', 'suc') }}>Warn</Button>
    <Button warn onClick={() => { add('Hello', 'warn') }}>Warn</Button>
    <Button error onClick={() => { add('Warning', 'error') }}>Error</Button>
  </Row>
}
          `}>
          <NotificationSampleType/>
        </UsageBlock>
      </Con>

      <Con w={200}>
        <UsageBlock title={'Pass in a Component'}
                    replacement={`
                    const NotificationSampleComp: React.FC = () => {
  const {add, remove} = useNotification()
  const notificationId = useRef<string>(undefined)

  const NotificationComp = () => {
    return <Con w={100} h={100}>
      <Con abs ovh w={'auto'} r={5} t={5}>
        <IconButton xs onClick={() => {
          remove(notificationId.current as string)
          notificationId.current = ''
        }}>&times;</IconButton>
      </Con>

      <Title>Title</Title>
      <Title>Hello</Title>
    </Con>
  }

  return <Col between>
    <Button disabled={!!notificationId.current} primary onClick={() => {
      if (notificationId.current) {
        return
      }
      notificationId.current = add(
        <NotificationComp/>,
        'info',
        false,
      )
    }}>Show</Button>
  </Col>
}
                    `}>
          <NotificationSampleComp/>
        </UsageBlock>
      </Con>

    </Row>


    <Con mt={100} mb={40}>
      <Col w={'auto'}>
        <Title h4 id="api"><Link href={'#api'}># API</Link></Title>

        <Con mb={30}></Con>
        <API data={addApi}/>


      </Col>
    </Con>

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

const NotificationSampleType: React.FC = () => {
  const {add} = useNotification()

  return <Row between>
    <Button onClick={() => { add('Hello', 'info') }}>Normal</Button>
    <Button primary onClick={() => { add('Hello', 'suc') }}>Warn</Button>
    <Button warn onClick={() => { add('Hello', 'warn') }}>Warn</Button>
    <Button error onClick={() => { add('Warning', 'error') }}>Error</Button>
  </Row>
}

const NotificationSampleComp: React.FC = () => {
  const {add, remove} = useNotification()
  const notificationId = useRef<string>(undefined)

  const NotificationComp = () => {
    return <Con w={100} h={100}>
      <Con abs ovh w={'auto'} r={5} t={5}>
        <IconButton xs onClick={() => {
          remove(notificationId.current as string)
          notificationId.current = ''
        }}>&times;</IconButton>
      </Con>

      <Title>Title</Title>
      <Title>Hello</Title>
    </Con>
  }

  return <Col between>
    <Button disabled={!!notificationId.current} primary onClick={() => {
      if (notificationId.current) {
        return
      }
      notificationId.current = add(
        <NotificationComp/>,
        'info',
        false,
      )
    }}>Show</Button>
  </Col>
}

export default NotificationPage