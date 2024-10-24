import React from 'react'
import style from '../styles/Home.module.css'
import Card_Playlist from './CardPlaylist'
import CustomMixes from './CustomMixes'
import PlayList from './PlayList'

export default function Home() {
	return (	
		<div className={style.container}>
			<Card_Playlist />
			<CustomMixes />
			<PlayList name={'Temas recomendados'} numberSongs={5} />
		</div>
	)
}
