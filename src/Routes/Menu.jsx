import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import style from '../styles/Menu.module.css'
import Home from '../components/Home'
import { HiMiniSignal } from "react-icons/hi2";


export default function Menu() {
  return (
    <BrowserRouter>
      <div>
        <nav className={style.side_bar}>
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
