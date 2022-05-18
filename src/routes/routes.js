import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import FourOhFourPage from '../pages/404Page/404Page'
import UserAuthenticationContext from '../contexts/UserAuthenticationContext'
import React, { useContext } from 'react'

const LazyDashboard = React.lazy( () => import('../pages/DashboardPage/DashboardPage') )
const LazyLogin = React.lazy( () => import('../pages/LoginPage/LoginPage') )
const LazySignup = React.lazy( () => import('../pages/SignUpPage/SignUpPage') )

const Routes = () => {
  const {user} = useContext(UserAuthenticationContext)
  return(
    <BrowserRouter>
      <Switch>
        
        <Route exact path='/' component={HomePage}/>
        {!user && 
          <React.Suspense fallback={<h1>Cargando</h1>}>
            <Route path='/login' component={LazyLogin}/>
            <Route path='/signup' component={LazySignup}/>
          </React.Suspense> 
        }
        {user && 
          <React.Suspense fallback={<h1>Cargando</h1>}>
            <Route path='/dashboard' component={LazyDashboard}/>
          </React.Suspense>
        }
        <Route path='*' component={FourOhFourPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes