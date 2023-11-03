import React from 'react'
import { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import  auth  from '../../firebase.init';

function Login() {
    const [password,setPassword] = useState('');
    // const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
    signInWithEmailAndPassword(email,password)
  }

  return (
    <>
       <div classname='login-container'>
         <div className='image-container'>
            <img src='https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D'></img>
         </div>
         <div className='form-container'>
            <TwitterIcon/>
           <form onSubmit={handleSubmit}>
              <input 
              type='email'
              className='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              >
              </input>
              <input 
              type='password'
              className='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className='btn-login'>
                <button type='submit' className='btn'>Login</button>
              </div>
           </form>
         </div>
       </div>

    </>
  )
}

export default Login