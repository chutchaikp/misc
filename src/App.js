import React from 'react'
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
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
import ShowHide from './pages/ShowHide'
import DataGridPage from './pages/DataGridPage'
import ImageUpload from './pages/ImgUpload'
import DotENV from './pages/DotENV'
import Loading from './pages/Loading'
import CustomHook from './pages/CustomHook'
import DynamicForm from './pages/DynamicForm.js'
import Design from './pages/Design.js'
import Drawer from './pages/Drawer.js'
import TestPage from './pages/TestPage.jsx'
import Selector from './pages/Selector.jsx'
import DataGridEx from './pages/DataGridEx.jsx'
import Sticky from './pages/Sticky.jsx'
import Hover from './pages/Hover.jsx'
import MySlider from './pages/MySlider.jsx'
// import Slider2 from './pages/Slider2.jsx'
// import Slick from './pages/Slick.jsx'
import SliderAxisHorizontal from './pages/sliderAxisHorizontal/SliderAxisHorizontal.jsx'
import MySliderResponsive from './pages/MySliderResponsive'

const router = createBrowserRouter([
	{
		path: '/',
		element: <div className='app'>
			<Navbar />
			<Outlet />
		</div>,
		children: [
			{ path: '/', element: <ShowHide /> },
			{ path: '/datagrid', element: <DataGridPage /> },
			{ path: '/collapse', element: <CollapsePage /> },
			{ path: '/showhide', element: <ShowHide /> },
			{ path: '/datagrid', element: <DataGridPage /> },
			{ path: '/img', element: <ImageUpload /> },
			{ path: '/dotenv', element: <DotENV /> },
			{ path: '/loading', element: <Loading /> },
			{ path: '/hook', element: <CustomHook /> },
			{ path: '/form', element: <FormPage /> },
			{ path: '/buttongroup', element: <ButtonGroupPage /> },
			{ path: '/radio', element: <RadioPage /> },
			{ path: '/dynamicform', element: <DynamicForm /> },
			{ path: '/design', element: <Design /> },
			{ path: '/drawer', element: <Drawer /> },
			{ path: '/listgroup', element: <ListGroupPage /> },
			{ path: '/custom', element: <CustomControlPage /> },
			{ path: '/transition', element: <Transition /> },
			{ path: '/test', element: <TestPage /> },
			{ path: '/selector', element: <Selector /> },
			{ path: '/datagridex', element: <DataGridEx /> },
			{ path: '/sticky', element: <Sticky /> },
			{ path: '/hover', element: <Hover /> },
			{ path: '/my-slider', element: <MySlider /> },
			{ path: '/sah', element: <SliderAxisHorizontal />, },
			{ path: '/my-slider-responsive', element: <MySliderResponsive /> },
			// { path: '/slider2', element: <Slider2 /> },
			// TODO:
			// https://www.npmjs.com/package/react-slick
			// { path: '/slider-x', element: <Slick /> },
		]
	},
	// {
	// 	path: '/my-slider-x', element: <MySlider />,
	// },
])

const App = () => {
	return (
		<RouterProvider router={router} />
	)
}

const AppYY = () => {
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