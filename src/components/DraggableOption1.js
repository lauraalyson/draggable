import React from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { useDragControls } from 'framer-motion'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import Map from './map'

function DraggableOne() {
	const constraintsRef = React.useRef(null)
	const dragControls = useDragControls()

	return (
		<div
			className='area'
			ref={constraintsRef}
			onPointerDown={(event) => dragControls.start(event)}>
			<div>
				<motion.div
					className='box-square'
					drag
					dragConstraints={constraintsRef}
					dragControls={dragControls}>
					<Map />
				</motion.div>
				<motion.div
					className='box-square v-1'
					drag
					dragConstraints={constraintsRef}
					dragControls={dragControls}
				/>
			</div>
			<motion.div
				className='box-tall'
				drag
				dragConstraints={constraintsRef}
				dragControls={dragControls}
			/>
			<div>
				<motion.div
					className='box-wide'
					drag
					dragConstraints={constraintsRef}
					dragControls={dragControls}
				/>
				<div>
					<motion.div
						className='box-wide v-2'
						drag
						dragConstraints={constraintsRef}
						dragControls={dragControls}
					/>
				</div>
			</div>

			<motion.div
				className='box-square'
				drag
				dragConstraints={constraintsRef}
				dragControls={dragControls}
			/>
			<motion.div
				className='box-wide v-3'
				drag
				dragConstraints={constraintsRef}
				dragControls={dragControls}
			/>
			<motion.div
				className='box-square'
				drag
				dragConstraints={constraintsRef}
				dragControls={dragControls}
			/>
		</div>
	)
}

export default DraggableOne
