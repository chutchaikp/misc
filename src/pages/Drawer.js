import './drawer.scss';
const Drawer = () => {
	return (
		<div className='drawerContainer'>
			<h1> Drawer </h1>

			<div className="wrapper">
				<input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
				<label for="drawer-toggle" id="drawer-toggle-label"></label>
				{/* <header>Header</header> */}
				<nav id="drawer">
					<ul>
						<li><a href="#">Menu Item</a></li>
						<li><a href="#">Menu Item</a></li>
						<li><a href="#">Menu Item</a></li>
						<li><a href="#">Menu Item</a></li>
					</ul>
				</nav>
			</div>


			<div id="page-content">
				<p>Page Content</p>
			</div>

		</div>
	)
}
export default Drawer;