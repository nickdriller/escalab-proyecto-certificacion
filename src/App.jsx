import routes from './routes/routes'
import { UserAuthenticationProvider } from './contexts/UserAuthenticationContext'

const App = () => (
  <UserAuthenticationProvider>
    {routes}
  </UserAuthenticationProvider>
)

export default App
