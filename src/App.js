import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import CollapsePage from './pages/CollapsePage'
import Ellipsis from './pages/Ellipsis'
import Home from './pages/Home'
// import Loader from './components/loader/Loader'
import LoaderPage from './pages/LoaderPage'
import Wrap from './pages/Wrap'

const App = () => {
	return (

		<BrowserRouter>

			<Navbar />

			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/icon' element={<Home />}></Route>
				<Route path='/collapse' element={<CollapsePage />}></Route>
				<Route path="/loader" element={<LoaderPage />}></Route>
				<Route path="/wrap" element={<Wrap />}></Route>
				<Route path="/ellipsis" element={<Ellipsis />}></Route>


			</Routes>
		</BrowserRouter>



	)
}

export default App