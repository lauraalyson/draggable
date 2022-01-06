import React from 'react';
import LauraMemoji from '../Assets/laura-memoji.png';

class Bio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				{ ( this.props.layout === 'xs' || this.props.layout === 'xxs' ) 
					?
					<SmallLayout />
					: 
					<LargeLayout />
					}
			</div>
		
		)
	}
}

function LargeLayout() {
	return (
		<div
			className='widget-bio row'
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				padding: '1em',
			}}>
			<div style={{ justifyContent: 'center' }} className='col-5'>
				<img
					src={LauraMemoji}
					alt='LauraMemoji'
					className='widget-bio-memoji'
				/>
				<div style={{ paddingTop: '.5em', textAlign: 'center' }}>
					<button> Resume </button> &nbsp;
					<button> LinkedIn </button>
				</div>
			</div>

			<div className='col-7'>
				<h3>Laura Waterbury</h3>
				<h6 style={{ color: '#C9D4F9' }}>Full-Stack Developer</h6>
				<p>
					Welcome to my corner of the interweb. When I'm not coding, you can
					find me binging podcasts at a rate only rivaled by Ira Glass.
				</p>
			</div>
		</div>
	)
}

// function MediumLayout() {
// 	return (
// 		<div
// 			className='widget-bio row'
// 			style={{
// 				justifyContent: 'center',
// 				alignItems: 'center',
// 				height: '100%',
// 				padding: '1em',
// 			}}>
// 			<img
// 				src={LauraMemoji}
// 				alt='LauraMemoji'
// 				className='widget-bio-memoji'
// 				style={{ width: '40%', padding: '0' }}
// 			/>
// 			<div
// 				style={{ justifyContent: 'center', textAlign: 'center' }}
// 				className='col-12'>
// 				<h3>Laura Waterbury</h3>
// 				<h6 style={{ color: '#C9D4F9' }}>Full-Stack Developer</h6>
// 				<p style={{ padding: '0em 3em' }}>
// 					Welcome to my corner of the interweb. When I'm not coding, you can
// 					find me binging podcasts at a rate only rivaled by Ira Glass.
// 				</p>
// 				<div style={{ textAlign: 'center' }}>
// 					<button> Resume </button> &nbsp;
// 					<button> LinkedIn </button>
// 				</div>
// 			</div>

// 			<div className='col-12'></div>
// 		</div>
// 	)
// }

function SmallLayout() {
	return (
		<div
			className='widget-bio row'
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				padding: '1em',
			}}>
			<img
				src={LauraMemoji}
				alt='LauraMemoji'
				className='widget-bio-memoji'
				style={{ width: '24%', padding: '0' }}
			/>
			<div
				style={{ justifyContent: 'center', textAlign: 'center' }}
				className='col-12'>
				<h3>Laura Waterbury</h3>
				<h6 style={{ color: '#C9D4F9' }}>Full-Stack Developer</h6>
				<p style={{ padding: '0em 2em' }}>
					Welcome to my corner of the interweb. When I'm not coding, you can
					find me binging podcasts at a rate only rivaled by Ira Glass.
				</p>
				<div style={{ textAlign: 'center' }}>
					<button> Resume </button> &nbsp;
					<button> LinkedIn </button>
				</div>
			</div>

			<div className='col-12'></div>
		</div>
	)
}

export default Bio
