import { auth } from "./index";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut,sendPasswordResetEmail} from "firebase/auth";

export const createUser = async (values) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email.trim(), values.password.trim());
        // The user has been created successfully, user data can be accessed through userCredential.user
        return userCredential;
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error code: ${errorCode}, Error message: ${errorMessage}`);
        // You can throw the error to handle it on function invocation
        throw error;
    }   
}

export const signIn=(values)=>{
return signInWithEmailAndPassword(auth,values.email.trim(),values.password.trim())
}

export const logout=()=>{
    return signOut(auth)
}
export const passwordReset=(email)=>{
    sendPasswordResetEmail(auth,email)
}