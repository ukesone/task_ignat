import React, {useState} from 'react'
import s from './Hometask3.module.css'

type objType = {
	id: number,
	n: string,
	p: string
}

const initialState = [
	{id: 1, n: 'работа', p: 'high'},
	{id: 2, n: 'дом', p: 'low'},
	{id: 3, n: 'кот', p: 'middle'},
	{id: 4, n: 'реакт', p: 'high'},
	{id: 5, n: 'хтмл', p: 'low'}
]

export default function Hometask3() {

	let [state, setState] = useState<Array<objType>>(initialState)

	let addClick = () => {
		let newObj = {id: 6, n: 'new', p: 'low'}
		setState([...state, newObj])
	}
	let removeClick = (id: any) => {
		return setState(state.filter( el => el.id !== id))
	}

	let resultId = state.map(r => {
		console.log('render')
		return (
			<div className={s.items} key={r.id}>
				<button
					onClick={addClick}
					className={s.button}>+</button>
				<div className={s.item}>
					Number: {r.id}
				</div>
				<div className={s.item}>
					View: {r.n}
				</div>
				<div className={s.item}>
					Priority: {r.p}
				</div>
				<button
					onClick={() => {removeClick(r.id)}}
					className={s.button}>-</button>
			</div>)
	})

	return <div className={s.root}>
		{resultId}
	</div>
}