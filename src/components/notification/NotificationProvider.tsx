import {createContext, FC, ReactNode, useContext, useRef, useState} from 'react'
import Transition from '../transition/Transition'
import Container from '../container/Container'
import {useLiteUIContext} from '../../LiteUIProvider'
import {createPortal} from 'react-dom'

interface NotificationItemProps {
  id: string
  comp: ReactNode
  type: 'info' | 'suc' | 'warn' | 'error'
  anim: boolean
  timer: number
}

interface NotificationContextType {
  notifications: NotificationItemProps[],
  add: (comp: ReactNode, type?: NotificationItemProps['type'], delay?: number | false) => string,
  remove: (id: string) => void,
}

/**
 * NotificationContext
 *
 * @brief
 * React context for managing global notification toasts.
 *
 * @intro
 * Provides shared state and methods (`add`, `remove`) for handling notification messages
 * throughout the application. Used by `NotificationProvider` to supply context values.
 *
 * @example
 * import { useNotification } from '@lite-u/ui'
 *
 * const { add } = useNotification()
 * add('Saved successfully!', 'info')
 */
export const NotificationContext = createContext({
  notifications: [],
  add: () => '',
  remove: () => {},
} as NotificationContextType)

/**
 * NotificationProvider component
 *
 * @brief
 * Provides notification context and renders toasts with animation and auto-dismiss(optional) behavior.
 *
 * @intro
 * Wraps an application with a notification system. Allows components to trigger toast messages
 * with customizable content, type, and duration. Renders floating notifications using portals
 * with enter/exit animations, and removes them after a timeout(optional).
 *
 * @example
 * import { useNotification } from '@lite-u/ui'
 *
 * const NotificationSampleSimple: React.FC = () => {
 *    const {add} = useNotification()
 *
 *    return <div onClick={()=>add('hello')}></div>
 * }
 */
const NotificationProvider: FC<{
  children: ReactNode
}> = ({children}) => {
  const [notifications, setNotifications] = useState<NotificationItemProps[]>([])
  const notificationsRef = useRef<Map<string, NotificationItemProps>>(new Map())
  const animationExitDuration = 150

  const {theme} = useLiteUIContext()
  const updateNotifications = () => {
    const arr = Array.from(notificationsRef.current.values())

    setNotifications(arr)
  }

  const addNotification = (comp: React.ReactNode, type: NotificationItemProps['type'] = 'info', delay: number | false = 2000) => {
    const id = type + '-' + Date.now()
    const n: NotificationItemProps = {
      id,
      type,
      comp,
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

  return <NotificationContext.Provider value={{
    notifications,
    add: addNotification,
    remove: removeNotification,
  }}>
    {children}
    {
      createPortal(
        notifications.map(({id, comp, type, anim}, index) => {
          let color = '#666'

          if (type === 'error') {
            color = theme.colors.error
          }

          if (type === 'warn') {
            color = theme.colors.warn
          }

          if (type === 'suc') {
            color = theme.colors.success
          }

          return <div role={'notification'} key={id} style={{
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
              }}>{comp}</Container>
            </Transition>
          </div>
        }), document.body,
      )
    }
  </NotificationContext.Provider>
}

export const useNotification = () => useContext(NotificationContext)

export default NotificationProvider