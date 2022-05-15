import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/sign-up' component={SignUpPage}/>
    </Switch>
  </BrowserRouter>
)

export default routes