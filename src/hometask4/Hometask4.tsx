import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Hometask4.module.css'
import MyInput from '../common/myInput/MyInput'

type HomeType = {
	onChange: () => void
	onKeyPress: () => void
}

export type ChangeEventType = ChangeEvent<HTMLInputElement>
export type KeyboardEventType = KeyboardEvent<HTMLInputElement>

export default function Hometask4() {

	let [state, setState] = useState<string> ('')
	let [titleInput, setTitleInput] = useState<string>('')

	let handleChange = (e: ChangeEventType) => {
		setTitleInput(e.target.value)
	}

	let handleKeyPress = (e: KeyboardEventType) => {
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
						<MyInput
							value={titleInput}
							onChange={handleChange}
							onKeyPress={handleKeyPress}
						/>
						<button
							onClick={addNewTaskTitle}
							className={s.button}>+</button>
					</div>
					<div>{state}</div>
				</div>
			</div>
	)
}