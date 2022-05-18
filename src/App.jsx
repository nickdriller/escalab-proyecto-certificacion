import Routes from './routes/Routes'
import { UserAuthenticationProvider } from './contexts/UserAuthenticationContext'

const App = () => (
  <UserAuthenticationProvider>
    <Routes />
  </UserAuthenticationProvider>
)

export default App
