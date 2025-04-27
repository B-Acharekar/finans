// lib/auth.js
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// Signup function
export async function signup(email, password, name) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      await updateProfile(user, { displayName: name });
    }
    await sendEmailVerification(user,{
      url: 'http://localhost:3000/login',
      handleCodeInApp: false,
    });
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;  // Optional: Re-throw the error to handle in the UI layer
  }
}

// Login function
export async function login(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;  // Optional: Re-throw the error to handle in the UI layer
  }
}
