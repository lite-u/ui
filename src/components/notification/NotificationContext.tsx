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

const initialState: NotificationContextType = {
  notifications: [],
  add: () => { },
  remove: () => {},
}

export const NotificationContext = createContext(initialState)
export const useNotification = () => useContext(NotificationContext)
