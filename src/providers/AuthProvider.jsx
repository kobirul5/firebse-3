import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
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

    onAuthStateChanged(auth, currentUser =>{
        if(currentUser){
            console.log("loged in ", currentUser)
            setUser(setUser)
        }
        else{
            console.log("don't log in")
        }

    })


    const name = "Kobirul Islam"
    const authInfo = {
        name,
        user,
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;