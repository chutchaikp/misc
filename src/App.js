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

import CustomControlPage from './pages/CustomControlPage'
import ListGroupPage from './pages/ListGroupPage'
import Buttonx from './components/buttonxGroup/Buttonx'

const App = () => {
	return (
		<div>

			<div className="button-group">
				<input type="radio" id="radio1" name="radios" value="all" />
				<label className="green" for="radio1">
					All
				</label>

				<input type="radio" id="radio2" name="radios" value="open" />
				<label className="green" for="radio2">
					Open
				</label>

				<input type="radio" id="radio4" name="radios" value="other" />
				<label className="green" for="radio4">
					Other
				</label>

				<input type="radio" id="radio3" name="radios" value="true" />
				<label className="red" for="radio3">
					Archived
				</label>

				<input type="radio" id="radio5" name="radios" value="5" />
				<label className="red" for="radio5">
					Another one
				</label>
			</div>

		</div>
	)
}

const Appxx = () => {
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

					<Route path="/custom" element={<CustomControlPage />}></Route>
					<Route path="/listgroup" element={<ListGroupPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App