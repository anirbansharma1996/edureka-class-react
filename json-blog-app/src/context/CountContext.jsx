import { createContext,useState } from "react";
export const CountContext = createContext();

export default function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => count + 1);
  };

  return <CountContext.Provider value={{count,handleCount}}>{children}</CountContext.Provider>;
}
