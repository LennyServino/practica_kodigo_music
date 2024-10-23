import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import style from '../styles/Menu.module.css'
import Home from '../components/Home'
import CustomMixes from '../components/CustomMixes';
//Importar iconos
import { HiMiniSignal } from "react-icons/hi2";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { LuDisc2 } from "react-icons/lu";
import { FiMusic } from "react-icons/fi";


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
              <IoIosArrowDown className={style.arrow_btn}/>
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
          <Link to="/home">Inicio</Link>
          <a href="">Explorar</a>
          <a href="">Videos</a>

          {/* Seccion mi musica */}
          <h2>Mi Musica</h2>
          <Link to="/mixes" className={style.link_with_icon}><HiMiniSignal />Mixes & Radio</Link>
          <Link className={style.link_with_icon}><LuDisc2 />Albumes</Link>
          <Link className={style.link_with_icon}><FiMusic />Canciones</Link>
        </nav>

      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inicio' element={<Home />}></Route>
        <Route path='/mixes' element={<CustomMixes />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
