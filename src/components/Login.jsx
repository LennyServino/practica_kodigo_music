import React, { useEffect } from 'react'
import styles from '../styles/Login.module.css'
import { GiMusicSpell } from "react-icons/gi";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//importando los usuarios de la carpeta data
import usersData from '../data/users.json';

const schema = yup.object().shape({
    email: yup.string().required("El correo es obligatorio").email("Correo Invalido, ejemplo: usuario@dominio.com"),
    password: yup.string().required("Campo Obligatorio").min(8, "La contraseña debe contener al menos 8 caracteres")
})

export default function Login({setUser}) {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const navigate = useNavigate();

    //validar si el usuario ya inicio sesion no muestre el login
    useEffect(() => {
        if(localStorage.getItem('user_kodigo_music')) {
            navigate('/home');
        }
    }, [])

    const loginUser = (data) => {
        //validamos que el usuario exista
        const user = usersData.find(user => user.email === data.email && user.password === data.password)

        if(user) {
            //guardamos el usuario en el localstorage
            localStorage.setItem('user_kodigo_music', JSON.stringify(user))
            console.log("Usuario encontrado");
            setUser(user);
            navigate('/home');
        } else {
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
        <div className={styles.body}>
            <div className={styles.login_container}>
                <div className={styles.login_content}>
                    <GiMusicSpell  className={styles.logo}/>
                    <h1>Kodigo Music</h1>
                    <p>Ingresa en Kodigo Music y experimenta la música de la manera que el artista querría</p>
                    <form action="" onSubmit={handleSubmit(loginUser)}>
                        <div className={styles.input_box}>
                            <label>Correo</label>
                            <input type="email" placeholder='Ingrese su correo' {...register('email', {required: true})}/>
                            <p className={styles.error}>
                                {errors.email && errors.email.message}
                            </p>
                        </div>
                        <div className={styles.input_box}>
                            <label>Contraseña</label>
                            <input type="password" placeholder='Ingrese su contraseña' {...register('password', {required: true})}/>
                            <p className={styles.error}>
                                {errors.password && errors.password.message}
                            </p>
                        </div>
                        <div className={styles.btn_box}>
                            <button type='submit'>Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
