import { jsx as _jsx } from "react/jsx-runtime";
import { Row } from '../../index';
import { useState } from 'react';
const basicStyles = {
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
};
const NotificationItem = ({ n: { id, text, type } }) => {
    const [show, setShow] = useState(false);
    let color = '#000';
    if (type === 'error') {
        color = 'red';
    }
    if (type === 'warn') {
        color = 'yellow';
    }
    return _jsx(Row, { jc: true, center: true, style: {
            ...basicStyles,
            borderColor: color,
            color,
            // zIndex: 1000 + index,
        }, children: text }, id);
};
export default NotificationItem;
