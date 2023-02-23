import { auth } from "./index";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut,sendPasswordResetEmail} from "firebase/auth";

export const createUser=(values)=>{
    return createUserWithEmailAndPassword(auth, values.email, values.password)   
}

export const signIn=(values)=>{
return signInWithEmailAndPassword(auth,values.email,values.password)
}

export const logout=()=>{
    return signOut(auth)
}
const passwordReset=(email)=>{
    sendPasswordResetEmail(auth,email)
}





