import {FC, ReactNode, useEffect, useRef, useState} from 'react'
import {Row} from '../../index'
import {NotificationContext, NotificationProps} from './NotificationContext'

const NotificationProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])
  const notificationsRef = useRef<Map<string, NotificationProps>>(new Map())

  useEffect(() => {

  }, [])

  const updateNotifications = () => {
    const arr = Array.from(notificationsRef.current.values())

    setNotifications(arr)
  }

  const addNotification = (text: string, type: NotificationProps['type'] = 'info', delay = 3000) => {
    const id = type + '-' + Date.now()
    const n = {
      id,
      type,
      text,
      timer: NaN,
    }

    n.timer = setTimeout(() => {
      removeNotification(id)
    }, delay)

    notificationsRef.current.set(id, n)

    updateNotifications()
  }

  const removeNotification = (id: string): boolean => {
    const n = notificationsRef.current.get(id)

    if (n) {
      clearTimeout(n.timer)
      notificationsRef.current.delete(id)
      updateNotifications()

      return true
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
        notifications.map((notification) => {
          return <Row key={notification.id} jc center style={{
            position: 'fixed',
            background: '#fff',
            padding: 10,
            maxWidth: 200,
            borderRadius: 5,
            boxShadow: '0 0 3px 0 #000',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            {notification.text}
          </Row>
        })
      }
    </NotificationContext.Provider>
  )
}

export default NotificationProvider