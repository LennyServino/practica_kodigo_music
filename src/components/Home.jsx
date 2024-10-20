import React from 'react'
import style from '../styles/Home.module.css'
import Card_Playlist from './CardPlaylist'
import CustomMixes from './CustomMixes'

export default function Home() {
	return (
		<div className={style.container}>
			<Card_Playlist />
			<CustomMixes />
		</div>
	)
}
