import React from 'react'
import styles from './Benefits.module.sass'
import { Icon } from '@iconify/react'

const Benefits = () => (
  <section className={styles.benefits}>
    <h5>fastest solution</h5>
    <h3>Accesible to anyone</h3>
    <p>Lighting fast transactions. Buy an sell with ease and peace of mind.</p>
    <p>Invest in cryptocurrency today with just a few clicks..</p>
    <div className={styles.benefits__content}>
      <div className={styles.benefits__item}>
        <figure className={styles.benefits__icon}>
          <Icon icon="ic:round-bolt" />
        </figure>  
        <h2 className={styles.benefits__title}>
          Instant trading
        </h2>
        <p className={styles.benefits__text}>Instat trading for real-time wallet balance / coin updates and notifications</p>
      </div>
      
      <div className={styles.benefits__item}>
        <figure className={styles.benefits__icon}>
          <Icon icon="ic:baseline-support" />
        </figure> 
        <h2 className={styles.benefits__title}>
          24/7 Support
        </h2>
        <p className={styles.benefits__text}>Our support assistance staff is available 24hrs. a day to help you for trading.</p>
      </div>
      
      <div className={styles.benefits__item}>
        <figure className={styles.benefits__icon}>
          <Icon icon="ic:round-lock" />
        </figure>
        <h2 className={styles.benefits__title}>
          Secure storage
        </h2>
        <p className={styles.benefits__text}>Trade peace of mind is 2FA, Browser, Session, Device Managment and more.</p>
      </div>
      
      <div className={styles.benefits__item}>
        <figure className={styles.benefits__icon}>
          <Icon icon="ic:round-lock" />
        </figure>
        <h2 className={styles.benefits__title}>
          Secure storage
        </h2>
        <p className={styles.benefits__text}>Trade peace of mind is 2FA, Browser, Session, Device Managment and more.</p>
      </div>
    </div>
  </section>
)

export default Benefits