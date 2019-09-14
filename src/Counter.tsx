import React, { useState } from "react";

interface Props {
  children: (count: number, increment: () => void, decrement: () => void, reset: () => void) => JSX.Element | null;
}

const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);
  const reset = () => setCount(0);
  return <div>
    {children(count, increment, decrement, reset)}
  </div>;
};

export default Counter;
