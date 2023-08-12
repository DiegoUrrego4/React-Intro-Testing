import { useState } from 'react';

const DEFAULT_VALUE = 1;
export const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = (value: number = DEFAULT_VALUE) => {
    setCounter(counter + value);
  };
  const handleReset = () => {
    setCounter(initialValue);
  };
  const handleSubtract = (value: number = DEFAULT_VALUE) => {
    setCounter(counter - value);
  };

  return {
    counter,
    handleAdd,
    handleReset,
    handleSubtract,
  };
};
