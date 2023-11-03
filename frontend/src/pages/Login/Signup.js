import React from 'react'
import { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import  auth  from '../../firebase.init';

function Signup() {

    const [password,setPassword] = useState('');
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    console.log(user)

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(email,password)
   await createUserWithEmailAndPassword(email,password);
  }

  return (
    <div className='login-container'>
    <div className='image-container'>
       <img src='https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D'></img>
    </div>
    <div className='form-container'>
       <TwitterIcon/>
      <form onSubmit={handleSubmit}>
         <input 
         type='text'
         className='display-name'
         placeholder='Username'
         onChange={(e) => setUsername(e.target.value)}
         >
         </input>
         <input 
         type='text'
         className='display-name'
         placeholder='Name'
         onChange={(e) => setName(e.target.value)}
         >
         </input>
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
           <button type='Submit' className='btn'>Signup</button>
         </div>
      </form>
    </div>
  </div>

  )
}

export default Signup