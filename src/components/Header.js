import React from "react";
import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'



export default function Header() {
  const [selected, setSelected] = useState(0);

  const nav = [
	  {
		  title: 'Home',
		  color: 'black'
	  },
	  {
		  title: 'About',
		  color: 'black'
	  },
	  {
		  title: 'Projects',
		  color: 'black'
	  }
  ]
		return (
			<AnimateSharedLayout>
				<div className="header">
				<ol style={{ transform: 'translateZ(0)' }} >
					{nav.map(({ title, color }, i) => (
						<motion.li
						animate
						key={i}
						className={`title ${i === selected && 'selected'}`}
						style={{ color: i === selected ? color : '#333' }}
						onClick={() => setSelected(i)}
						>
							{i === selected && (
								<motion.div 
								layoutId='underline'
								className='underline'
								/>
							)}
							{title}
						</motion.li>
					))}
				</ol>					
				</div>
			</AnimateSharedLayout>
		)
}
