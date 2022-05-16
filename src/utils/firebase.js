import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTG1evaYbvs8VcLUJudquahULI8oPpB78",
  authDomain: "certification-project-19920.firebaseapp.com",
  projectId: "certification-project-19920",
  storageBucket: "certification-project-19920.appspot.com",
  messagingSenderId: "683688589108",
  appId: "1:683688589108:web:062f9b928fe391a0015761"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const GoogleSignIn = async () => {
  signInWithPopup(auth, googleProvider)
  .then( result => {
    const user = result.user
    console.log(user)
  })
  .catch((error) => {
    /* 
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    */
    
  })
}
