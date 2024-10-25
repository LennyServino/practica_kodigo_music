import Menu from './Routes/Menu'
import './App.css'
import Login from './components/Login'
import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CustomMixes from './components/CustomMixes';
import PrivateRoute from './Routes/privateRoute'
import PlayList from './components/PlayList'
import WorkInProgress from './components/WorkInProgress'

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

          <Route path='/inicio' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />

          <Route path='/mixes' element={
            <PrivateRoute>
              <CustomMixes />
            </PrivateRoute>
          } />

          <Route path='/canciones' element={
            <PrivateRoute>
              <PlayList name={'Canciones'} numberSongs={20} />
            </PrivateRoute>
          } />

          <Route path='/albums' element={
            <PrivateRoute>
              <CustomMixes />
            </PrivateRoute>
          } />

          <Route path='/login' element={<Login setUser={setUser}/>}></Route>
          <Route path='/work-in-progress' element={<WorkInProgress />} />
          <Route path='*' element={<Navigate to={user ? '/' : '/login'} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
