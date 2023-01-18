import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import CollapsePage from './pages/CollapsePage'
import Ellipsis from './pages/Ellipsis'
// import Home from './pages/Home'
import Icon from './pages/Icon'
import LoaderPage from './pages/LoaderPage'
import Wrap from './pages/Wrap'

import './app.scss'
import ButtonGroupPage from './pages/ButtonGroupPage'
import FormPage from './pages/FormPage'
import { RadioPage } from './pages/RadioPage'
import Transition from './pages/Transition'

const App = () => {
	return (
		<BrowserRouter>
			<div className='app'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Icon />}></Route>
					<Route path='/icon' element={<Icon />}></Route>
					<Route path='/collapse' element={<CollapsePage />}></Route>
					<Route path="/loader" element={<LoaderPage />}></Route>
					<Route path="/wrap" element={<Wrap />}></Route>
					<Route path="/ellipsis" element={<Ellipsis />}></Route>
					<Route path="/buttongroup" element={<ButtonGroupPage />}></Route>
					<Route path="/form" element={<FormPage />}></Route>
					<Route path="/radio" element={<RadioPage />}></Route>
					<Route path="/transition" element={<Transition />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App