import Menu from './Routes/Menu'
import './App.css'
import Login from './components/Login'
import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CustomMixes from './components/CustomMixes';
import PrivateRoute from './Routes/privateRoute'

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
      <BrowserRouter>
        {
          /* validar que si existe el usuario muestre el menu, de lo contrario muestra el login */
          user && <Menu user={user} setUser={setUser} />
        }

        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='/home' element={<Home />}></Route>
          <Route path='/inicio' element={<Home />}></Route>
          <Route path='/mixes' element={<CustomMixes />}></Route>
          <Route path='/login' element={<Login setUser={setUser}/>}></Route>
          <Route path='*' element={<Navigate to={user ? '/' : '/login'} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
