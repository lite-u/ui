import {createContext} from 'react'

const SelectContext = createContext<{
  value: string;
  itemClick: (v: string) => void;
} | null>(null);

export default SelectContext;