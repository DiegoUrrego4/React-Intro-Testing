import { useState } from 'react';
export const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(initialValue);
  };
  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    handleAdd,
    handleReset,
    handleSubtract,
  };
};
