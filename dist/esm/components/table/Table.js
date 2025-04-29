import { jsx as _jsx } from "react/jsx-runtime";
import TableBase from './TableBase';
const Table = ({ children, fw = false, fh = true, style = {}, ...props }) => {
    return _jsx(TableBase, { style: {
            width: fw ? '100%' : 'auto',
            height: fh ? '100%' : 'auto',
            borderCollapse: 'collapse',
            ...style,
        }, ...props, children: children });
};
export default Table;
