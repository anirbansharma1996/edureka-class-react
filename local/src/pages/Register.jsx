import { useState } from 'react'


const Register = () => {
 const[user,setUser] = useState("")

  const handleInput =(e)=>{
   setUser((prev)=>e.target.value)
  }
const handleSubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem("user",user)
    setTimeout(()=>{
        window.location.href='/write'
    },1000)
}

  return (
    <div className='register-container'>
      <h3>REGISTER</h3>
     <form onSubmit={handleSubmit} className='register-form'>
        <input 
        type="text" 
        placeholder='enter username' 
        value={user}
        onChange={handleInput}
        />
        <input type="submit" value="Register" />
     </form>


    </div>
  )
}

export default Register