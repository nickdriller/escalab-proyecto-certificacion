import React from 'react'
import styles from './Hero.module.sass'

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.hero__content}>
      <div className={styles.hero__text}>
        <h2>Enjoy buying <br /> and selling cryptos</h2>
      </div>
      <ul className={styles.hero__list}>
        <li>Store all your crypto and NFTs in one place</li>
        <li>Trade 500+ assets on DEXes and earn interest</li>
        <li>No Coinbase account required</li>
        <li>and more 😎</li>
      </ul>
      <div className={styles.hero__action}>
        <button className={styles.boton}>
          <span className={styles.boton__texto}>Quiero ser pulento!</span>
        </button>
      </div>
    </div>
  </section>
)

export default Hero