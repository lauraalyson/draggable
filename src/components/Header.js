import React from "react";
import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'



export default function Header() {
  const [selected, setSelected] = useState(0);

  const nav = [
	  { title: 'Home' },
	  { title: 'About' },
	  { title: 'Projects' }
  	]

	  const transition = { duration: 0.5, ease: 'easeInOut' }

	  const postVariants = {
			initial: { y: 10, opacity: 0 },
			enter: { y: 0, opacity: 1, transition },
			exit: { y: -10, opacity: 0, transition },
		}
	  
	return (
		<AnimateSharedLayout>
			<div className='header'>
				<ol style={{ transform: 'translateZ(0)', padding: '2em 0em' }}>
					{nav.map(({ title }, i) => (
						<motion.li
							initial='exit'
							animate='enter'
							exit='exit'
							variants={postVariants}
							key={i}
							className={`title ${i === selected && 'selected'}`}
							onClick={() => setSelected(i)}>
							{i === selected && (
								<motion.div layoutId='underline' className='underline' />
							)}
							{title}
						</motion.li>
					))}
				</ol>
			</div>
		</AnimateSharedLayout>
	)
}
