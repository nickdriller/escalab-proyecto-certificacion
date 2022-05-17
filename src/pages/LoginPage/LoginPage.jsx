import React, { Fragment, useState, useContext } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import UserAuthenticationContext from '../../contexts/UserAuthenticationContext'

const LoginPage = () => {

  const {userLogInWithMail, userLogInWithGoogle} = useContext(UserAuthenticationContext)

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
      const user = await userLogInWithMail(inputFields.email, inputFields.password)
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
    userLogInWithGoogle()
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