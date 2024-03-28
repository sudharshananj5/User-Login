import React from 'react'
import "./Home.css"
import { FaHandPointDown } from "react-icons/fa";

export const Home = (props) => {
    
    const handlelogout=()=>{
      props.setLogin(false)
    }
  return (
<div className='home'>
    <div className='home-props'>
    <h1>Home</h1>
        <div className='props'>
        <h2>Hi! This is Sudharshanan. Welcome to my HomePage.</h2>
        <h3>Thanks for being here.Please click below to logout </h3>
        <p><FaHandPointDown /></p>
        <button onClick={handlelogout}>Logout</button>
        </div>
    </div>
 </div>     

  )
}

export default Home
