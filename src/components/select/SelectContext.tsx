import {createContext, CSSProperties} from 'react'

const SelectContext = createContext<{
  selectValue: string | number
  itemClick: (v: string | number) => void;
  itemStyle: CSSProperties
} | null>(null)

export default SelectContext