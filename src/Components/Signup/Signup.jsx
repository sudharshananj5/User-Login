import React, { createContext, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

export const userContext = createContext(null)
const Signup = () => {

  const [uname,setUname] = useState("")
  const [mail,setMail] = useState("")
  const [pword,setPword] = useState("")
  const [confirmpword,setConfirmpword] = useState("")

  const [nameerror,setNameerror] = useState("")
  const [mailerror,setMailerror] = useState("")
  const [pworderror,setPworderror] = useState("")
  const [confirmpassword,setConfirmpassword] = useState("")

  const [confirmpworderror,setConfirmpworderror]= useState("")
  const[submit,setSubmit]= useState("")
  
  const user = useContext(userContext)


  const usersignup=()=>{
    if(uname===""&&mail===""&pword===""&&confirmpword===""){
      setNameerror("Enter your Username")
      setMailerror("Enter your email")
      setPworderror("Enter Your Password")
      setConfirmpassword("Enter Confirm Password")
    }
    else if(uname===""){
      setNameerror("Enter your Username") 
      setConfirmpassword("")
      setConfirmpworderror("")
      setPworderror("")

    }
    else if(mail===""){
      setMailerror("Enter your email")
      setNameerror("")
      setConfirmpassword("")
      
      
    }
    else if(pword===""){
      setPworderror("Enter Your Password")
      setMailerror("")
      setConfirmpassword("")
      setNameerror("")
    
    }
    else if(confirmpword===""){
      setConfirmpassword("Enter Confirm Password")
      setPworderror("")
      setMailerror("")
      setNameerror("")
      
      
    }

    else if(confirmpword!==pword){
      setConfirmpworderror("Confirm Password Must Be same As Password")
      setConfirmpassword("")
      setNameerror("")
      setMailerror("")
      setPworderror("")
}

    else{
      setConfirmpassword("")
      setConfirmpworderror("")
      setSubmit("SignUp Sucessfully")
      user.setUserData([...user.userData,{name:uname,email:mail,password:pword}])
      setUname("")
      setMail("")
      setPword("")
      setConfirmpword("")

      
  }
  }
  

  return  (
    <div className='signup-container'>
        <div className='signup'>
            <h1 style={{textAlign:"center"}}>SignUp</h1>
            <div className='sign-cont'>
            <div className='signup-field'>
              <label >Username</label>
                <input type="text" value={uname} onChange={(e)=>{setUname(e.target.value);setSubmit("")}} placeholder='Enter Your Name'/>
                {nameerror?
                <div style={{color:"red",fontSize:"18px"}} >{nameerror}</div>:''} 
            </div>
                <div className="signup-field">
                <label>E-mail</label>
                <input type="email" value={mail} onChange={(e)=>{setMail(e.target.value);setSubmit("")}}placeholder='Enter Your email'/>
                {mailerror?
                <div style={{color:"red",fontSize:"18px"}} >{mailerror}</div>:''}
                </div>

               <div className="signup-field">
               <label>Password</label>
                <input value={pword} onChange={(e)=>{setPword(e.target.value);setSubmit("")}} placeholder='Enter Your Password'/>
                {pworderror?
                <div style={{color:"red", fontSize:"18px"}} >{pworderror}</div>:''}
               </div>
                <div className="signup-field">
                <label>Confirm Password</label>
                <input type="password" value={confirmpword} onChange={(e)=>{setConfirmpword(e.target.value);setSubmit("")}} placeholder='Enter Your Password'/>
                {confirmpassword?
                <div style={{color:"red",fontSize:"18px"}} >{confirmpassword}</div>:''}
                {confirmpworderror?
                <div style={{color:"red",fontSize:"18px"}} >{confirmpworderror}</div>:''}
                </div>
                <div className="signup-field">
                <button onClick={usersignup}>Submit</button>
                {submit?
                <div style={{color:"yellow",fontSize:"25px",textAlign:"center"}} >{submit}</div>:''}
                </div>
            </div>
            <div className='backtolog'><Link className='backin'  to="/" style={{backgroundColor:"black" ,color:"red", textDecoration:"none"}}>Back to Login</Link>
                </div>
                

            </div>
        </div>
  )
}
export default Signup


