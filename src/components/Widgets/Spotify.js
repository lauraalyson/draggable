import React, { useState, useEffect } from 'react';
import axios from 'axios';
import spotify from './../Assets/spotify-logo.png';

const username = 'lowaterbury'
const apiKey = 'ac7dd22471e14b250e68490f97ed5c47'

const Spotify= () => {
	const [currSong, setCurrSong] = useState('');
	const [currArtist, setCurrArtist] = useState('');
	const [lfmData, setLfmData] = useState({});

	useEffect(() => {

		axios
			.get(
				`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`
			)
			.then((response) => {
				console.log(response)
				setLfmData(response.data.recenttracks)
				setCurrSong(response.data.recenttracks.track[0].name)
				setCurrArtist( response.data.recenttracks.track[0].artist['#text'] )
			})
			.then(() => console.log(lfmData))
			.catch((error) =>
				console.log(error)
			)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

		return (
			<div className='spotify-widget'>
				<img src={spotify} alt='spotify-logo' />
				<span className='shadowloader'>
					<span></span>
					<span></span>
					<span></span>
				</span>
				
				<p style={{ color: '#63DBBE', paddingTop: '1.2em' }}>
					 Last played
				</p>
				<h4>{currSong}</h4>
				<p>{currArtist}</p>
				{/* <p>{lfmData}</p> */}
			</div>
		)
}

export default Spotify
