import React from 'react'
import styles from './Footer.module.sass'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__content}>
      <div className={styles['footer__item--principal']}>
        <img src='https://via.placeholder.com/220px60' alt='Logo shit' />
      </div>
      <ul className={styles.footer__item}>
        <li><a href="#">Link1</a></li>
        <li><a href="#">Link2</a></li>
        <li><a href="#">Link3</a></li>
        <li><a href="#">Link4</a></li>
      </ul>  
      <ul className={styles.footer__item}>
        <li><a href="#">Link1</a></li>
        <li><a href="#">Link2</a></li>
        <li><a href="#">Link3</a></li>
        <li><a href="#">Link4</a></li>
      </ul>  
      <ul className={styles.footer__item}>
        <li><a href="#">Link1</a></li>
        <li><a href="#">Link2</a></li>
        <li><a href="#">Link3</a></li>
        <li><a href="#">Link4</a></li>
      </ul>  
    </div>
  </footer>
)

export default Footer