import Routes from './routes/Routes'
import { UserAuthenticationProvider } from './contexts/UserAuthenticationContext'
import { Route } from 'react-router-dom'

const App = () => (
  <UserAuthenticationProvider>
    <Routes />
  </UserAuthenticationProvider>
)

export default App
