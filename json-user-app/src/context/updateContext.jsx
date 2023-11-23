import { createContext, useState } from "react";
export const UpdateContext = createContext();

export default function UpdateContextProvider({ children }) {
     const [count,setCount] = useState(0)
      
     const handleCount = ()=>{
        setCount(prev=>count+1)
     }


  return <UpdateContext.Provider value={{count,handleCount}} >{children}</UpdateContext.Provider>;
}
