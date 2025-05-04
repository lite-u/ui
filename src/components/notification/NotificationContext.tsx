import {createContext, useContext} from 'react'

export interface NotificationProps {
  id: string
  text: string
  type: 'info' | 'warn' | 'error'
  anim: boolean
  timer: number
}

interface NotificationContextType {
  notifications: NotificationProps[],
  add: (text: string, type?: 'info' | 'error' | 'warn', delay?: number) => void,
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
  add: () => { },
  remove: () => {},
} as NotificationContextType)

export const useNotification = () => useContext(NotificationContext)
