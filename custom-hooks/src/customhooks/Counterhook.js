import { useState } from "react";

export default function useCounter(argument) {
  const [count, setCount] = useState(argument);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
     return count > 0 ? setCount((prev) => prev - 1) : 0;
  };
  return { count, increment, decrement };
}
