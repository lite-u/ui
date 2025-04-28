import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Con } from '../con/Con';
export const Tooltip = ({ xs, s, m = true, l, primary, warn, error, neutral = true, style = {}, type = 'button', children, ...props }) => {
    // const {theme} = useLiteUIContext()
    const wrapperRef = useRef(null);
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handlePosition = () => {
        if (!wrapperRef.current) {
            return;
        }
        const rect = wrapperRef.current.getBoundingClientRect();
    };
    // const [opacity, setOpacity] = useState(1)
    /* const {
       fontSizes,
       padding,
       button,
       borderRadius,
     } = theme*/
    /*
      const getVariant = (): Variant => {
        if (primary) return 'primary'
        if (error) return 'error'
        if (warn) return 'warn'
        return 'neutral'
      }*/
    /*
      const getSize = (): SizeVariant => {
        if (xs) return 'xs'
        if (s) return 'sm'
        if (l) return 'lg'
        return 'md'
      }*/
    /*
    const size = getSize()
    const variant = getVariant()
    const sizeStyles: Record<SizeVariant, React.CSSProperties> = {
      xs: {
        minWidth: 30,
        height: 20,
      },
      sm: {
        minWidth: 40,
        height: 25,
      },
      md: {
        minWidth: 50,
        height: 30,
      },
      lg: {
        minWidth: 60,
        height: 40,
      },
    }*/
    /*
      const styles: React.CSSProperties = {
        opacity,
        // cursor: 'pointer',
        fontSize: fontSizes[size],
        padding: `0 ${padding[size].x}px`,
        borderRadius: `${borderRadius[size]}px`,
        borderWidth: 0,
        ...button[variant],
        ...sizeStyles[size],
        ...style,
      }*/
    return (_jsxs(Con, { ref: wrapperRef, role: 'tooltip', onMouseOver: () => setShow(true), onMouseOut: () => setShow(false), ...props, children: [children, show && _jsx(Con, { style: {
                    position: 'fixed',
                    top: position.y,
                    left: position.x,
                } })] }));
};
export default Tooltip;
