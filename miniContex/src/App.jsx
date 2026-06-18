
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/profile'

function App() {

  return (
  <UserContextProvider>
  <h1>Hello</h1>
  <Login /><br />
  <Profile />
  </UserContextProvider>
  )
}

export default App
