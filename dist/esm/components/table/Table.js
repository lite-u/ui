import { jsx as _jsx } from "react/jsx-runtime";
import TableBase from './TableBase';
import { createContext, useContext } from 'react';
const TableContext = createContext({
    storedRowStyle: {},
    storedCellStyle: {},
});
const Table = ({ children, fw = false, fh = true, fixed = false, style = {}, rowStyle = {}, cellStyle = {}, ...props }) => {
    // const [storedRowStyle, setStoredRowStyle] = useState(rowStyle)
    // const [storedCellStyle, setStoredCellStyle] = useState(cellStyle)
    return _jsx(TableContext.Provider, { value: {
            // borderStyle,
            storedRowStyle: rowStyle,
            storedCellStyle: cellStyle,
        }, children: _jsx(TableBase, { style: {
                width: fw ? '100%' : 'auto',
                height: fh ? '100%' : 'auto',
                borderCollapse: 'collapse',
                tableLayout: fixed ? 'fixed' : 'auto',
                ...style,
            }, ...props, children: children }) });
};
export const useTableContext = () => useContext(TableContext);
export default Table;
