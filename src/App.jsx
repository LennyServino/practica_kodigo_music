import Menu from './Routes/Menu'
import './App.css'
import Login from './components/Login'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(false)

  return (
    <>
      {
        /* validar que si existe el usuario muestre el menu, de lo contrario muestra el login */
        user ? <Menu /> : <Login />
      }
    </>
  )
}

export default App
