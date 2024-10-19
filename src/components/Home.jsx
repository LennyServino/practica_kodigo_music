import React from 'react'
import style from '../styles/Home.module.css'
import Card_Playlist from './CardPlaylist'

export default function Home() {
	return (
		<div className={style.container}>
			<Card_Playlist />
		</div>
	)
}
