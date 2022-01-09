import React, { useState, useEffect } from 'react';
import axios from 'axios';
import spotify from './../Assets/Graphics/spotify-logo.png'

const username = 'lowaterbury'
const apiKey = 'ac7dd22471e14b250e68490f97ed5c47'

const Spotify= () => {
	const [currSong, setCurrSong] = useState('');
	const [currArtist, setCurrArtist] = useState('');

	useEffect(() => {

		axios
			.get(
				`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`
			)
			.then((response) => {
				setCurrSong(response.data.recenttracks.track[0].name)
				setCurrArtist( response.data.recenttracks.track[0].artist['#text'] )
			})
			.catch((error) =>
				console.log(error)
			)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

		return (
			<div className='spotify-widget'>
				<img src={spotify} alt='spotify-logo' />
				<p style={{ paddingTop: '1em' }}>Currently Listening</p>
				<h5 style={{ color: '#63DBBE' }}>{currSong}</h5>
				<p>{currArtist}</p>
			</div>
		)
}

export default Spotify
