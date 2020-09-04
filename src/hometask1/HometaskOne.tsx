import React from 'react'
import s from './Name.module.css'

type TextTitleType = {
	text: string
}

const TextTitle: TextTitleType = {
	text: `Hi, thanks for visiting my page. My name is Sergey. I am a FRONT-END developer!`
}


export default function HometaskOne() {
	return (
		<div className={s.name}>
			<div className={s.blink}>
				<div className={s.title}>{TextTitle.text}</div>
			</div>
		</div>
	)
}

