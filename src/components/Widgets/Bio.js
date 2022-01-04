import React from 'react'
import LauraMemoji from '../Assets/laura-memoji.png'

class Bio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div
				className='widget-bio row'
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					padding: '1em'
				}}>
				<div style={{ justifyContent: 'center' }} className='col-5'>
					<img
						src={LauraMemoji}
						alt='LauraMemoji'
						className='widget-bio-memoji'
					/>
					<div
						style={{ padding: '1em', textAlign: 'center' }}
					>
						<button> Resume </button> &nbsp;
						<button> LinkedIn </button>						
					</div>
				</div>

				<div className='col-7'>
					<h3>Laura Waterbury</h3>
					<h6 style={{ color: '#C9D4F9' }}>Full-Stack Developer</h6>
					<p>Welcome to my corner of the interweb. When I'm not coding, you can find me binging podcasts at a rate only Ira Glass could compete with.</p>
				</div>
			</div>
		)}
}

export default Bio
