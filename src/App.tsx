import React from 'react'
import './App.css'
import HometaskOne from './hometask1/HometaskOne'
import Hometask2 from './hometask2/Hometask2'
import Hometask22 from './hometask2-2/Hometask22'
import Hometask3 from './hometask3/Hometask3'


export default function App() {
	return <div className='root'>
			<HometaskOne />
			<Hometask2 />
			<Hometask22 />
			<Hometask3 />
		</div>
}

