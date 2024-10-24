import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import style from '../styles/Menu.module.css'
import Home from '../components/Home'
import CustomMixes from '../components/CustomMixes';
//Importar iconos
import { HiMiniSignal } from "react-icons/hi2";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { LuDisc2 } from "react-icons/lu";
import { FiMusic } from "react-icons/fi";
import Swal from 'sweetalert2';


export default function Menu({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    try {
      localStorage.removeItem('user_kodigo_music')
      setUser(null)
      navigate('/')
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "error",
        title: "Usuario o contraseña incorrectos"
    });
    }
  }

  return (
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
                  <Link to="/work-in-progress">Perfil</Link>
                </li>
                <li>
                  <Link to="/work-in-progress">Configuracion</Link>
                </li>
                <li>
                  <a href="" onClick={handleLogout}>Cerrar Sesión</a>
                </li>
              </ul>
            </div>
            )}
          <Link to="/home">Inicio</Link>
          <Link to="/work-in-progress">Explorar</Link>
          <Link to="/work-in-progress">Videos</Link>

          {/* Seccion mi musica */}
          <h2>Mi Musica</h2>
          <Link to="/mixes" className={style.link_with_icon}><HiMiniSignal />Mixes & Radio</Link>
          <Link className={style.link_with_icon} to='/albums'><LuDisc2 />Albumes</Link>
          <Link className={style.link_with_icon} to='/canciones' ><FiMusic />Canciones</Link>
        </nav>
      </div>
  )
}
