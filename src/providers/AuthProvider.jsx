import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';
 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log("loged in ", currentUser)
            setUser(currentUser)
        })

        return ()=>{
            unsubscribe()
        }
    },[])


    const name = "Kobirul Islam"
    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;