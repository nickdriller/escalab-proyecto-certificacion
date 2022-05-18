import React from 'react'
import { useContext } from 'react'
import styles from './Menu.module.sass'
import UserAuthenticationContext from '../../contexts/UserAuthenticationContext'
import { Link } from 'react-router-dom'

const Menu = () => {
  const {user, userLogOut} = useContext(UserAuthenticationContext)

  async function logOutUser(){
    try{
      await userLogOut() 
     

    }
    catch(error){
      console.log('error', error)
    }
  }

  console.log('usuario desde menu', user)

  return(
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
        {
          !user &&  
          <ul className={`${styles.menu__list} ${styles['menu__list--user']}`}>
            <li><Link to='signup'>Signup</Link></li>
            <li><Link to='login'>Login</Link></li>
          </ul>
        }
        {user && 
           <div className={`${styles.menu__list} ${styles['menu__list--user']}`}>
          
            <button onClick={logOutUser}>
              Sal de la sesión
            </button>
            <Link to='dashboard'>Dashboard</Link>
          </div>
        }
       
       
      </div>
    </nav>
  )
} 

export default Menu