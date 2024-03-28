import React, { useState } from 'react'
import './Login.css'
import Home from '../../Pages/Home'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../Signup/Signup';

export const LoginSignup = () => {
  const [usernameOrMail,setUsernameOrMail]=useState("")
  const [password,setPassword]=useState("")
  const [isLogin,setIsLogin] = useState(false)

  const data = useContext(userContext)
  
  const [unameerror,setUnameerror]=useState(" ")
  const [pworderror,setPworderror]=useState("")
  const [loginerror,setLoginerror]=useState("")

  const [invaliduser,setInvaliduser]=useState("")
  const [invalidpword,setInvalidpword]=useState("")

  console.log(data)


  const userlogin=()=>{
    const user = data.userData.filter((u)=>{
      return (u.name===usernameOrMail||u.email===usernameOrMail)
    })
    console.log(user);
    if(usernameOrMail===""&&password===""){
      setUnameerror("Enter your username or mail")
      setPworderror("Enter your Password")
      setLoginerror("")
    
     }
    
   else if(password==="")
   {
    setPworderror("Enter your Password")
    setUnameerror("")
    setLoginerror("")
    setInvalidpword("")
    
   }
   else if(usernameOrMail===""){
    setUnameerror("Enter your username or mail")
    setPworderror("")
    setLoginerror("")
    setInvaliduser("")
  }
  else if(user.length===0){
    setLoginerror("Invalid Username or Password. Please Signup and come back to login")
    setUnameerror("")
    setPworderror("")
    setInvalidpword("")
  }
  
  // else if(usernameOrMail!==user[0].email && usernameOrMail!==user[0].name){
  //   setInvaliduser("Invalid Username 0r mail")
  //   setInvalidpword("")
  //   setUnameerror("")
    
  // }
  else if(password!==user[0].password){
    setInvalidpword("Invalid Password")
    setInvaliduser("")
    setPworderror("")
    setUnameerror("")
  
  }
  else{
    if(usernameOrMail===user[0].name || usernameOrMail===user[0].email && password===user[0].password){

      setIsLogin(true)
      setUsernameOrMail("")
      setUnameerror("")
      setPworderror("")
      setInvalidpword("")
      setLoginerror("")
      setPassword("")
    }
    else{
      setLoginerror("Invalid Username or mail or Password. Please Signup and come back to login")
      setUnameerror("")
      setPworderror("")
    }

   }
  }

 
  return isLogin===true?<Home  setLogin={setIsLogin}/>:
  (<div className='Loginsignup'>
  <div className='LoginSignup-container'>
        <h1>Login</h1>
    <div className='Login-fields' >
        <label><FaUser/>Username or Email</label> 
        <input type='text' onChange={(e)=>setUsernameOrMail(e.target.value)} placeholder='Enter Your Name'/><br></br>
       {unameerror?
        <div style={{color:"red", marginTop:"-40px",fontSize:"18px"}} >{unameerror}</div>:''}
        {invaliduser?
        <div style={{color:"red",marginTop:"-40px",fontSize:"18px"}} >{invaliduser}</div>:''}
        <label><FaLock />Password</label> 
        <input type='text' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'/><br></br>
        {loginerror?
        <div style={{color:"red",marginTop:"-40px",fontSize:"18px"}} >{loginerror}</div> :''}
        { invalidpword?
        <div style={{color:"red",marginTop:"-40px",fontSize:"18px"}} >{invalidpword}</div>:''}
        {pworderror?
        <div style={{color:"red",marginTop:"-40px",fontSize:"18px"}} >{pworderror}</div>:''}
        <button onClick={userlogin}>Login</button>
    </div>
        <p className='loginsignup-login'>Do You Have An Account?<Link style={{color:"red",textDecoration:"none",margin:"10px"}} to={"/Signup"}>SignUp</Link></p>   
    <div className='login-agree'>
        <input type='checkbox' name='' id=''></input>   
        <p>By Continuing, I agree to the terms of use & privacy policy</p> 
    </div> 
  </div>
</div>)
  
}
export default LoginSignup