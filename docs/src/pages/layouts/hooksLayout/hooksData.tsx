
import NotificationPage from '../../samples/NotificationPage.tsx'
import {ReactElement} from 'react'

export type HOOK_ROUTE_MAP_Type = Record<string, { to: string, name: string, comp: ReactElement }>
const HOOK_ROUTE_MAP = {
  notification: {
    to: 'notification',
    name: 'Notification',
    apiNameKey: 'Notification',
    comp: <NotificationPage/>,
  },
}

export default HOOK_ROUTE_MAP
