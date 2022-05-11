import React, { Fragment } from 'react'
import styles from './Menu.module.sass'
import { Icon } from '@iconify/react'

const Menu = () => {
  return(
    
    <Fragment>
      <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
          
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href='#'>
              <span className={styles.menu__icono}>
                <Icon icon="fluent:app-folder-24-filled" />
              </span>
              <span className={styles.menu__texto}>dashboard</span>
            </a>
          </li>

          <li className={styles.menu__item}>
            <a className={styles.menu__link} href='#'>
              <span className={styles.menu__icono}>
                <Icon icon="fluent:wallet-24-filled" />
              </span>
              <span className={styles.menu__texto}>wallet</span>
            </a>
          </li>

          <li className={styles.menu__item}>
            <a className={styles.menu__link} href='#' >
              <span className={styles.menu__icono}>
                <Icon icon="fluent:data-pie-24-filled" />
              </span>
              <span className={styles.menu__texto}>mercado</span>
            </a>
          </li>

          <li className={styles.menu__item}>
            <a className={styles.menu__link} href='#'>
              <span className={styles.menu__icono}>
                <Icon icon="fluent:news-24-filled" />
              </span>
              <span className={styles.menu__texto}>noticias</span>
            </a>
          </li> 

          <li className={styles.menu__item}>
            <button className={styles.menu__link}>
              <span className={styles.menu__icono}>
                <Icon icon="fluent:sign-out-24-filled" />
              </span>
              <span className={styles.menu__texto}>cerrar sesión</span>
            </button>
          </li>
          
        </ul>
      </nav>
    </Fragment>
  )
}

export default Menu