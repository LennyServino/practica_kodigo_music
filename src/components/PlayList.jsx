import React from 'react'
import styles from '../styles/PlayList.module.css'
//datos de las canciones
import songsData from '../data/music.json'

export default function PlayList({ name, numberSongs }) {
    const showSongs = songsData.slice(0, numberSongs)

    return (
        <div className={styles.content_container}>
            <h1>{name}</h1>
            <div className={styles.playlist_table}>
                <div className={`${styles.table_header}`}>
                    <p>#</p>
                    <p>Titulo</p>
                    <p>Artista</p>
                    <p>Album</p>
                    <p>Duracion</p>
                </div>
                {
                    showSongs.map((song, index) => (
                        <div key={index} className={styles.row}>
                            <div>
                                <p>{index + 1}</p>
                            </div>
                            <div>
                                <p>{song.title}</p>
                            </div>
                            <div>
                                <p>{song.artist}</p>
                            </div>
                            <div>
                                <p>{song.album}</p>
                            </div>
                            <div>
                                <p>{song.duration}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
