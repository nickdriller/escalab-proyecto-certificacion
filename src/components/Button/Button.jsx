import React from 'react'
import styles from './Button.module.sass'

const Button = ({button}) => {
  return (
    <button type={button.type} className={styles.button}>
      <span className={styles.button__text}>{button.text}</span>
    </button>
  )
}

export default Button