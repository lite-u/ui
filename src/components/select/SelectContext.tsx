import {createContext} from 'react'

const SelectContext = createContext<{
  value: string | number
  itemClick: (v: string | number) => void;
} | null>(null)

export default SelectContext