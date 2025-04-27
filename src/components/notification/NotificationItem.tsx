import {Row} from '../../index'
import {NotificationProps} from './NotificationContext'
import {CSSProperties, FC, useState} from 'react'

const basicStyles: CSSProperties = {
  position: 'fixed',
  background: '#fff',
  padding: 10,
  maxWidth: 200,
  borderRadius: 5,
  border: '1px solid #000',
  top: '50%',
  left: '50%',
  transition: 'transform .5s',
  transform: 'translate(-50%, -50%)',
}

const NotificationItem: FC<{ n: NotificationProps }> = ({n: {id, text, type}}) => {
  const [show, setShow] = useState(false)
  
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
}

export default NotificationItem