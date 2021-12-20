import React from 'react';
// import axios from 'axios';

// const currentMusic = (user) => {
//     return axios({
//         url: apiUrl + '/movies',
//         // method: 'GET' - default method is GET
//         headers: {
//             Authorization: `Bearer ${user.token}`,
//         },
//     })
// }

class Spotify extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            currentArtist: '',
            currentSong: ''
        }
	}

	render() {
        const { currentArtist, currentSong } = this.state
		return (
			<div>
				Hi this is the spotify widget
                <p>Current Artist: {currentArtist}</p>
                <p>Current Song: {currentSong}</p>
			</div>
		)
	}
}

export default Spotify
