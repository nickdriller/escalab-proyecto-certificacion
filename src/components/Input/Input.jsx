import React from 'react'
import styles from './Input.module.sass'

const Input = ({input}) =>  (
  <div className={styles.input}>
    <label className={styles.input__label} htmlFor={input.id}>{input.label}</label>
    <input className={styles.input__input} id={input.id} {...input}/>
  </div>
)
  

export default Input