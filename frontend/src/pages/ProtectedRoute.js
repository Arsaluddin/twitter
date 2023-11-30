import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../context/firebase';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({childern}) {

    const [user,isLoading] = useAuthState(auth);

    if(isLoading){
        console.log("loading...");
    }

    if(!user){
       return <Navigate to='/login'/>
    }
   return childern;
}

export default ProtectedRoute