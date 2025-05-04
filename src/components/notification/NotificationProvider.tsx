import {FC, ReactNode, useRef, useState} from 'react'
import {Transition} from '../../index'
import {NotificationContext, NotificationProps} from './NotificationContext'
import Container from '../container/Container'
import {useLiteUIContext} from '../../LiteUIProvider'
import {createPortal} from 'react-dom'

/**
 * NotificationProvider component
 *
 * @brief
 * Context provider that manages and displays notification toasts.
 *
 * @intro
 * Provides `add` and `remove` methods to display timed notification messages of different types
 * (info, warn, error) using animated transitions. Notifications are rendered via portal
 * and automatically removed after a delay.
 *
 * @example
 * import { NotificationProvider } from '@lite-u/ui'
 *
 * <NotificationProvider>
 *   <App />
 * </NotificationProvider>
 */

const NotificationProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])
  const notificationsRef = useRef<Map<string, NotificationProps>>(new Map())
  const animationExitDuration = 300

  const {theme} = useLiteUIContext()
  const updateNotifications = () => {
    const arr = Array.from(notificationsRef.current.values())

    setNotifications(arr)
  }

  /**
   * Adds a notification with animation and automatic timeout.
   *
   * @param text - The notification message.
   * @param type - Type of notification ('info' | 'warn' | 'error').
   * @param delay - Time in ms before auto-dismissal.
   * @returns void
   */
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

      return id
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

  /**
   * Removes a notification immediately and clears timeout.
   *
   * @param id - The ID of the notification to remove.
   * @returns Whether the notification was successfully removed.
   */
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