import { jsx as _jsx } from "react/jsx-runtime";
import TableBase from './TableBase';
const Table = ({ children, fw = false, fh = true, fixed = false, style = {}, ...props }) => {
    return _jsx(TableBase, { style: {
            width: fw ? '100%' : 'auto',
            height: fh ? '100%' : 'auto',
            borderCollapse: 'collapse',
            tableLayout: fixed ? 'fixed' : 'auto',
            ...style,
        }, ...props, children: children });
};
export default Table;
