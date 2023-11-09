import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
  const [otp, setOtp] = useState(0);
  const [log, setLog] = useState(false);

  const handleLogin = () => {
    setOtp(Math.floor(Math.random() * 9999 + 1));
    setLog(!log);
  };

  return <LoginContext.Provider value={{otp,log,handleLogin}}>{children}</LoginContext.Provider>;
}
