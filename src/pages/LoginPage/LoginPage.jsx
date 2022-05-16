import React, { Fragment, useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

import { auth } from '../../utils/firebase'
import { GoogleSignIn } from '../../utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


const LoginPage = () => {

  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  })

  function onInputChange(event){
    const {name, value} = event.target
    setInputFields( lastValue => (
      {...lastValue, [name]:value }
    ))
  }

  
  async function onFormSubmit(event) {
    event.preventDefault()
    try{
      const user = await signInWithEmailAndPassword(auth, inputFields.email, inputFields.password)
      console.log(user)
      setInputFields({
        email: '',
        password: ''
      })
    }
    catch(error){
      console.log(error.message)
    }
  }

  function onGoogleSigIn(event){
    event.preventDefault()
    GoogleSignIn()
  }

  return (
    <Fragment>
      <h1>usuario logueado</h1>
      <form onSubmit={onFormSubmit}>
        <Input input={{
            label: 'Correo Electrónico',
            id: 'user-email',
            type: 'email',
            name: 'email',
            value: inputFields.email,
            placeholder: 'Ingresa tu correo ql',
            onChange: onInputChange
          }}        
        />

        <Input input={{
            label: 'Contraseña',
            id: 'user-password',
            type: 'password',
            name: 'password',
            value: inputFields.password,
            placeholder: 'Tu puta contraseña',
            onChange: onInputChange
          }}
        />  

        <Button button={{
            text: 'Iniciar sesión',
            type: 'submit'
            
          }}
        />
      </form>

      <form onSubmit={onGoogleSigIn}>
        <Button button={{
          text: 'ingesar con google',
          type: 'submit',
          }}
        />
      </form>
    </Fragment>
  )
}

export default LoginPage