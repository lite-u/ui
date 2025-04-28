import {CSSProperties, FC, ReactNode, useRef, useState} from 'react'
import {Transition} from '../../index'
import {NotificationContext, NotificationProps} from './NotificationContext'
import {Con} from '../con/Con'

const NotificationProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])
  const notificationsRef = useRef<Map<string, NotificationProps>>(new Map())
  const animationExitDuration = 300
  /*
    useEffect(() => {

    }, [])
  */

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

    // handle animation exit
    n.timer = setTimeout(() => {
      const n = notificationsRef.current.get(id)

      if (n) {
        n.anim = false
        updateNotifications()

        setTimeout(() => {
          removeNotification(id)
        }, animationExitDuration)
      }
    }, delay)

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

  const basicStyles: CSSProperties = {
    position: 'fixed',
    background: '#fff',
    padding: 10,
    maxWidth: 300,
    borderRadius: 5,
    border: '1px solid #000',
    top: '50%',
    left: '50%',
    transition: 'transform .5s',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  }

  return (
    <NotificationContext.Provider value={{
      notifications,
      add: addNotification,
      remove: removeNotification,
    }}>
      {children}
      {
        notifications.map(({id, text, type, anim}, index) => {
          let color = '#000'

          if (type === 'error') {
            color = 'red'
          }

          if (type === 'warn') {
            color = 'yellow'
          }

          /*   return <div key={id} style={{
               position: 'fixed',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               textAlign: 'center',
               zIndex: 9999,
             }}>
               <Transition
                 visible={anim}
                 from={{
                   scale: 0,
                 }}
                 to={{
                   scale: 1,
                 }}
               >
                 <Con w={100} h={100} bg={'red'}>{text}</Con>
               </Transition>
             </div>*/

          return <Con key={id} style={{
            ...basicStyles,
            borderColor: color,
            color,
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
            >
              <Con w={100} h={100}>{text}</Con>
            </Transition>
          </Con>
        })
      }
    </NotificationContext.Provider>
  )
}

export default NotificationProvider