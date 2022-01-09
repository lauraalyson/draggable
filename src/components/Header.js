import React, { useState } from "react";
import { motion, AnimateSharedLayout } from 'framer-motion';
import { isMobile } from 'react-device-detect'
import ShowcaseLayout from "./GridLayout";
import MobileShowcaseLayout from "./MobileGridLayout";

export default function Header() {
  const [selected, setSelected] = useState(0);
//   const [sort, setSorted] = '';

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
		<div>
			<AnimateSharedLayout>
				<div className="row" style={{ justifyContent: 'center' }}>
				<div className='header col-6'>
					<ol style={{ transform: 'translateZ(0)', padding: '2em 0em' }}>
						{nav.map(({ title }, i) => (
							<motion.li
								initial='exit'
								animate='enter'
								exit='exit'
								variants={postVariants}
								key={i}
								className={`title ${i === selected && 'selected'}`}
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
				</div>

			</AnimateSharedLayout>
		    { isMobile ? <MobileShowcaseLayout /> : <ShowcaseLayout /> }
		</div>
	)
}
