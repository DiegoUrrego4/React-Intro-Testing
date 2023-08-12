import { useCounter } from './hooks/useCounter';

export const Counter = () => {
  const { counter, handleAdd, handleReset, handleSubtract } = useCounter(10);

  return (
    <>
      <p>Number of clicks: {counter}</p>
      <button onClick={() => handleAdd(2)}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleSubtract()}>-1</button>
    </>
  );
};
