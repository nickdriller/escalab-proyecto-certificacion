import React from 'react'
import styles from './Menu.module.sass'

const Menu = () => (
  <nav className={styles.menu}>
    <div className={styles.menu__content}>
      <div className={styles.menu__logo}>
        <img src='https://via.placeholder.com/60' alt='Logo shit' />
      </div>
      <ul className={styles.menu__list}>
        <li><a href=''>Menu 01</a></li>
        <li><a href=''>Menu 02</a></li>
        <li><a href=''>Menu 03</a></li>
        <li><a href=''>Menu 04</a></li>
      </ul>
      <ul className={`${styles.menu__list} ${styles['menu__list--user']}`}>
        <li><a href=''>sign up</a></li>
        <li><a href=''>login</a></li>
      </ul>
    </div>
  </nav>
)

export default Menu