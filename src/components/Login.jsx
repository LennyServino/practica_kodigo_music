import React from 'react'
import styles from '../styles/Login.module.css'
import { GiMusicSpell } from "react-icons/gi";

export default function Login() {
    return (
        <div className={styles.login_container}>
            <div className={styles.login_content}>
                <GiMusicSpell  className={styles.logo}/>
                <h1>Kodigo Music</h1>
                <p>Ingresa en Kodigo Music y experimenta la música de la manera que el artista querría</p>
                <form action="">
                    <div className={styles.input_box}>
                        <label>Correo</label>
                        <input type="email" placeholder='Correo'/>
                    </div>
                    <div className={styles.input_box}>
                        <label>Contraseña</label>
                        <input type="password" placeholder='Contraseña'/>
                    </div>
                    <div className={styles.btn_box}>
                        <button type='submit'>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
