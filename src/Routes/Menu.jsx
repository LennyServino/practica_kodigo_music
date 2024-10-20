import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import style from '../styles/Menu.module.css'
import Home from '../components/Home'
import { HiMiniSignal } from "react-icons/hi2";
import { FaBars, FaTimes } from 'react-icons/fa';


export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <div>
        <button className={style.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`${style.side_bar} ${isOpen ? style.open : ''}`}>
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
      </Routes>
    </BrowserRouter>
  )
}
