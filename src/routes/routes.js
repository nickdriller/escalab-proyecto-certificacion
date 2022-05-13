import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage}/>
    </Switch>
  </BrowserRouter>
)

export default routes