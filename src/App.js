import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import { useDragControls } from "framer-motion";

function App() {
    const constraintsRef = React.useRef(null);
    const dragControls = useDragControls();

    return (
			<div
				className='area'
				ref={constraintsRef}
				onPointerDown={(event) => dragControls.start(event)}>
				<motion.div
					className='box'
					drag
					dragConstraints={constraintsRef}
					dragControls={dragControls}
				/>
				<motion.div
					className='box'
					drag
					dragConstraints={constraintsRef}
					dragControls={dragControls}
				/>
			</div>
		)
}

export default App
