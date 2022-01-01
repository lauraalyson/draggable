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
			style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
				<div className='col-4'>
					<img
					src={LauraMemoji}
					alt='LauraMemoji'
					className='widget-bio-memoji'
					/>
				</div>
                

				{/* <p className='col-8'>
					Hi, I&apos;m Laura, a full-stack developer based in NYC. When I&apos;m not coding I am binging podcasts and experimenting with recipes far beyond my culinary skills. 🎙  🥬 
				</p> */}

			</div>
		)}
}

export default Bio
