import React,{useContext}  from 'react'
import { LoginContext } from '../context/loginContext'

const Login = () => {
    const {otp,log,handleLogin} = useContext(LoginContext)



  return (
    <div>
        <h1>{log ? otp : "Logged out"}</h1>
         <button onClick={handleLogin}>LOGIN</button>
    </div>
  )
}

export default Login