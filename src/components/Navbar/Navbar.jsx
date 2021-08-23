import React from 'react';

const Navbar = props => {
	return (
		<nav className="navbar">
			<a className="navbar__item navbar__item_active" href="#">
				Все
			</a>
			<a className="navbar__item" href="#">
				iPhone
			</a>
			<a className="navbar__item" href="#">
				iPad
			</a>
			<a className="navbar__item" href="#">
				Mac
			</a>
			<a className="navbar__item" href="#">
				Watch
			</a>
			<a className="navbar__item" href="#">
				AirPods
			</a>
		</nav>
	);
};

export default Navbar;
