import {createContext} from 'react'

const SelectContext = createContext<{
  value: string;
  setValue: (v: string) => void;
} | null>(null);

export default SelectContext;