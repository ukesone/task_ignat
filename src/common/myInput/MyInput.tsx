import React from 'react'
import {ChangeEventType, KeyboardEventType} from '../../hometask4/Hometask4'
import s from './MyInput.module.css'

type propsType = {
	value: string
	onChange: (e: ChangeEventType) => void
	onKeyPress: (e: KeyboardEventType) => void
}

export default function MyInput(props: propsType) {
	debugger
	return (
		<div className={s.item}>
			<input
				className={s.input}
				type={'text'}
				value={props.value}
				onChange={props.onChange}
				onKeyPress={props.onKeyPress}
			/>
		</div>
	)


}