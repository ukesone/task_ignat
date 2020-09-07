import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Hometask3.module.css'

type HomeType = {

}

export default function Hometask3() {

	let [state, setState] = useState<string> ('')
	let [titleInput, setTitleInput] = useState('')

	let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTitleInput(e.target.value)
	}

	let handleKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13) {
			setState(titleInput)
			setTitleInput('')
		}
	}

	let addNewTaskTitle = () => {
		alert ( ' privet ' + titleInput)
		//setState(titleInput)
		setTitleInput('')
	}

	return (
			<div className={s.root}>
				<div className={s.items}>
					<div className={s.item}>
						<input
							// @ts-ignore
							value={titleInput}
							onChange={handleChange}
							onKeyPress={handleKeyPress}
							type="text"/>
						<button
							onClick={addNewTaskTitle}
							className={s.button}>+</button>
					</div>
					<div>{state}</div>
				</div>
			</div>
	)
}