import Menu from './Routes/Menu'
import './App.css'
import Login from './components/Login'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const userStorage = localStorage.getItem('user_kodigo_music')
    if(userStorage) {
      setUser(JSON.parse(userStorage))
    }
  }, [])

  return (
    <>
      {
        /* validar que si existe el usuario muestre el menu, de lo contrario muestra el login */
        user ? <Menu user={user} /> : <Login setUser={setUser}/>
      }
    </>
  )
}

export default App
