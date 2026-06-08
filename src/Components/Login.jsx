import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true);

  const toggleSignIn = () =>{
    setIsSignIn(!isSingIn);
  }

  return (
    <div>
      <div><Header/></div>
      <div className='absolute '>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg" alt="background-img" />
      </div>
      <form action="post"  className='w-3/12  my-36 p-12  mx-auto right-0 left-0 absolute bg-black text-white opacity-80 rounded-xl'>
        <h1 className='text-xl font-bold'>{isSingIn ? "Sign In " : "Sign Up"}</h1>
{ !isSingIn &&  <input className='p-2 mt-4 w-full bg-gray-700 rounded-lg' type="text" placeholder='Full Name' />}        
      <input className='p-2 my-4 w-full bg-gray-700 rounded-lg' type="text" placeholder='Email Address' />
        <input className='p-2 w-full  bg-gray-700 rounded-lg' type="text" placeholder='Password' />
        <button className='mt-4 bg-red-600 w-full px-4 py-2 rounded-xl hover:bg-red-400'>{isSingIn ? "Sign In " : "Sign Up"}</button>
        <p className='p-2 cursor-pointer' onClick={toggleSignIn}>{isSingIn ? "New To NetFlix Registerd Sign Up" : "Alredy Register? Sign In.."}</p>
      </form>
    </div>
  )
}

export default Login