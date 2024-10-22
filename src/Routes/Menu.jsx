import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import style from '../styles/Menu.module.css'
import Home from '../components/Home'
import { HiMiniSignal } from "react-icons/hi2";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";


export default function Menu({ user }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('user_kodigo_music')
    window.location.reload()
  }

  return (
    <BrowserRouter>
      <div>
        <button className={style.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`${style.side_bar} ${isOpen ? style.open : ''}`}>
          <div className={style.user_box}>
            <h3>{user.name}</h3>
            {/* boton para desplegar la lista de opciones */}
            <button onClick={toggleDropdown}>
              <IoIosArrowDown />
            </button>
            
          </div>
          {isDropdownOpen && (
            <div className={style.user_options}>
              <ul className={isDropdownOpen ? style.show : ''}>
                <li>
                  <a href="">Perfil</a>
                </li>
                <li>
                  <a href="">Configuración</a>
                </li>
                <li>
                  <a href="" onClick={handleLogout}>Cerrar Sesión</a>
                </li>
              </ul>
            </div>
            )}
          <Link to="/">Inicio</Link>
          <a href="">Explorar</a>
          <a href="">Videos</a>

          {/* Seccion mi musica */}
          <h2>Mi Musica</h2>
          <a href=""><HiMiniSignal />Mixes & Radio</a>
          <a href="">Playlists</a>
          <a href="">Albumes</a>
          <a href="">Canciones</a>
          <a href="">Videos</a>
          <a href="">Artistas</a>
        </nav>

      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inicio' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
