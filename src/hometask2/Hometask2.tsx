import React from 'react'
import s from './Hometask2.module.css'

type HometaskType = {
	header: string,
	title: string,
	time: string
}

const state: HometaskType = {
	header: 'DEVELOPMENT CORPORATION FRONT-END',
	title: 'Welcome to the first lesson from Ignat.',
	time: '01:10'
}

export default function Hometask2() {

	return (
		<div className={s.body}>
			<div className={s.avatar}>
			</div>
			<div className={s.cloud}>
				<div className={s.container}>
					<div className={s.item}><span>{state.header}</span></div>
					<div className={s.item}>{state.title}</div>
					<div className={s.item}><p>{state.time}</p></div>
				</div>
			</div>
		</div>
	)
}