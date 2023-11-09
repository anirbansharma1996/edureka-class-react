import { createContext } from "react";

export const TextContext = createContext()


export default function TextContextProvider({children}) {
    
   const text = "Porem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae cumque, dolorum ab at eum consequuntur. Necessitatibus corporis itaque, veritatis dolores et nemo, officia earum mollitia quasi suscipit, optio fugit sequi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. essitatibus corporis itaque, veritatis dolores et nemo, officia earum mollitia quasi suscipit, optio fugit sequi."

  return(<TextContext.Provider value={text}>{children}</TextContext.Provider>)

}