
import { useState, useEffect, createContext } from 'react'
import {auth, GoogleSignIn} from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'


const UserAuthenticationContext = createContext()

const UserAuthenticationProvider = ({children}) => {

  const [user, setUser] = useState()

  console.log('usuario desde context', user)

  function userSignUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function userLogInWithMail(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function userLogInWithGoogle(){
    return GoogleSignIn()
  }

  function userLogOut(){
    return signOut(auth)
  }

  useEffect( () => {
    const userCleanUp = onAuthStateChanged(auth, currentUser => {
      setUser( currentUser)
    })
    return () => userCleanUp
  }, [])

  const userAuthenticatoinData = {user, userSignUp, userLogInWithMail, userLogInWithGoogle, userLogOut}

  return(
    <UserAuthenticationContext.Provider value={userAuthenticatoinData}>
      {children}
    </UserAuthenticationContext.Provider>
  )
}

export {UserAuthenticationProvider}
export default UserAuthenticationContext