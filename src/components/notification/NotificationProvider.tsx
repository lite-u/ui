import {CSSProperties, FC, ReactNode, useEffect, useRef, useState} from 'react'
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

  const addNotification = (text: string, type: NotificationProps['type'] = 'info', delay = 2000) => {
    const id = type + '-' + Date.now()
    const n = {
      id,
      type,
      text,
      timer: NaN,
    }

    n.timer = setTimeout(() => {
      // console.log(9)
      removeNotification(id)
    }, delay)

    notificationsRef.current.set(id, n)

    updateNotifications()
  }

  const removeNotification = (id: string): boolean => {
    const n = notificationsRef.current.get(id)
    // console.log(n)
    if (n) {
      clearTimeout(n.timer)
      notificationsRef.current.delete(id)
      updateNotifications()

      return true
    }

    return false
  }

  const basicStyles: CSSProperties = {
    position: 'fixed',
    background: '#fff',
    padding: 10,
    maxWidth: 200,
    borderRadius: 5,
    border: '1px solid #000',
    // boxShadow: '0 0 3px 0 #000',
    top: '50%',
    left: '50%',
    transition: 'transform .5s',
    transform: 'translate(-50%, -50%)',
  }

  console.log([...notifications])
  return (
    <NotificationContext.Provider value={{
      notifications,
      add: addNotification,
      remove: removeNotification,
    }}>
      {children}
      {
        notifications.map(({id, text, type}, index) => {
          let color = '#000'

          if (type === 'error') {
            color = 'red'
          }
          if (type === 'warn') {
            color = 'yellow'

          }
          return <Row key={id} jc center style={{
            ...basicStyles,
            borderColor: color,
            color,
            // zIndex: 1000 + index,
          }}>
            {text}
          </Row>
        })
      }
    </NotificationContext.Provider>
  )
}

export default NotificationProvider