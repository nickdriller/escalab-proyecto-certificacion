import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import FourOhFourPage from '../pages/404Page/404Page'
import UserAuthenticationContext from '../contexts/UserAuthenticationContext'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import React, { Fragment, useContext } from 'react'

const Routes = () => {
  const {user} = useContext(UserAuthenticationContext)
  return(
    <BrowserRouter>
      <Switch>
        
        <Route exact path='/' component={HomePage}/>
        {!user && 
          <Fragment>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>
          </Fragment>
        }
        {user && 
          <Route path='/dashboard' component={DashboardPage}/>
        }
        <Route path='*' component={FourOhFourPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes