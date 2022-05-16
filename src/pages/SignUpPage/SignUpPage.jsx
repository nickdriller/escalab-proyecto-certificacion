import React, {Fragment, useState} from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

import { auth } from '../../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { GoogleSignIn } from '../../utils/firebase'

const SignUpPage = () => {

  const [inputFields, setInputFields] = useState({
    email: '',
    password: '',
    confirm_password: ''
  })

  function onInputChange(event){
    const {name, value} = event.target
    setInputFields( lastValue => (
      {...lastValue, [name]:value }
    ))
  }

  async function onFormSubmit (event){
    event.preventDefault()
    if (inputFields.password !== inputFields.confirm_password) {
      alert('Las contraseñas no coinciden')
      return
    }
    try{
      const user = await createUserWithEmailAndPassword(auth, inputFields.email, inputFields.password )
      console.log('user', user)
      setInputFields({
        email: '',
        password: '',
        confirm_password: ''
      })
    } catch(error) {
      console.log(error.message)

    }
  }

  function onGoogleSigIn(event){
    event.preventDefault()
    GoogleSignIn()
  }

  return (
    <Fragment>
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

        <Input input={{
            label: 'Confirmar Contraseña',
            id: 'confirm-password',
            type: 'password',
            name: 'confirm_password',
            value: inputFields.confirm_password,
            placeholder: 'Ingresala de nuevo',
            onChange: onInputChange
          }}
        />  

        <Button button={{
            text: 'quiero ser terrible de pulento',
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

export default SignUpPage