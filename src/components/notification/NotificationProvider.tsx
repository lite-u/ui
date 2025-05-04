import {FC, ReactNode, useRef, useState} from 'react'
import {Transition} from '../../index'
import {NotificationContext, NotificationProps} from './NotificationContext'
import Container from '../container/Container'
import {useLiteUIContext} from '../../LiteUIProvider'
import {createPortal} from 'react-dom'

const NotificationProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])
  const notificationsRef = useRef<Map<string, NotificationProps>>(new Map())
  const animationExitDuration = 100

  const {theme} = useLiteUIContext()
  const updateNotifications = () => {
    const arr = Array.from(notificationsRef.current.values())

    setNotifications(arr)
  }

  const addNotification = (text: string, type: NotificationProps['type'] = 'info', delay: number | false = 2000) => {
    const id = type + '-' + Date.now()
    const n: NotificationProps = {
      id,
      type,
      text,
      anim: false,
      timer: NaN,
    }

    notificationsRef.current.set(id, n)

    // handle animation enter
    setTimeout(() => {
      const n = notificationsRef.current.get(id)

      if (n) {
        n.anim = true

        updateNotifications()
      }

    }, 0)

    if (typeof delay === 'number') {
      n.timer = window.setTimeout(() => {
        removeNotification(id)
      }, delay)
    }

    // handle animation exit
    updateNotifications()
    return id
  }

  const removeNotification = (id: string): boolean => {
    const n = notificationsRef.current.get(id)

    if (n) {
      n.anim = false
      updateNotifications()

      n.timer = window.setTimeout(() => {
        notificationsRef.current.delete(id)
        updateNotifications()
      }, animationExitDuration)
    }

    return false
  }

  return (
    <NotificationContext.Provider value={{
      notifications,
      add: addNotification,
      remove: removeNotification,
    }}>
      {children}
      {
        createPortal(
          notifications.map(({id, text, type, anim}, index) => {
            let color = '#000'

            if (type === 'error') {
              color = theme.colors.error
            }

            if (type === 'warn') {
              color = theme.colors.warn
            }

            return <div key={id} style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000 + index,
            }}>
              <Transition
                visible={anim}
                from={{
                  scale: 0,
                }}
                to={{
                  scale: 1,
                }}
                leaveDuration={animationExitDuration}
                style={{overflow: 'visible'}}
              >
                <Container style={{
                  background: '#fff',
                  padding: 10,
                  textAlign: 'center',
                  borderRadius: 5,
                  fontSize: theme.fontSizes.sm,
                  boxShadow: color + ' 0 0 3px 0',
                  color,
                }}>{text}</Container>
              </Transition>
            </div>
          }), document.body,
        )
      }
    </NotificationContext.Provider>
  )
}

export default NotificationProvider