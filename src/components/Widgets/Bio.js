import React from 'react'
import LauraMemoji from '../Assets/laura-memoji.png'

class Bio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='widget-bio'>

                <img
                    src={LauraMemoji}
                    alt='LauraMemoji'
                    className='widget-bio-memoji'
				/>

				<div className='widget-bio-p'>
					Hi I&apos;m Laura<span className='widget-bio-name'></span>, a full-stack developer based in NYC. You can find me working with React and other JS frameworks, binging podcasts, and 
				</div>

			</div>
		)}
}

export default Bio
