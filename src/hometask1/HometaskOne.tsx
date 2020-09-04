import React from 'react'
import s from './Name.module.css'

export default function HometaskOne() {
	return (
		<div className={s.name}>
			<div className={s.blink}>
				<div className={s.title}>Hi, thanks for visiting my page. My name is Sergey. I am a FRONT-END
					developer!
				</div>
			</div>
		</div>
	)
}

