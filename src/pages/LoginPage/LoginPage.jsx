import React, { useState } from 'react'
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

  function onFormSubmit(event){
    event.preventDefault()
    console.log(inputFields)
  }

  return (
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
          type: 'button'
          
        }}
      />
    </form>
  )
}

export default LoginPage