import React from 'react';
import { NavLink } from 'react-router-dom';
import SortPopup from './SortPopup/SortPopup';

const Navbar = props => {
	return (
		<div className="navbar-wrapper">
			<nav className="navbar">
				<NavLink
					to="/iphone"
					className="navbar__item"
					activeClassName="navbar__item_active"
					href="#"
				>
					iPhone
				</NavLink>
				<NavLink
					to="/ipad"
					className="navbar__item"
					activeClassName="navbar__item_active"
					href="#"
				>
					iPad
				</NavLink>
				<NavLink
					to="/mac"
					className="navbar__item"
					activeClassName="navbar__item_active"
					href="#"
				>
					Mac
				</NavLink>
				<NavLink
					to="/watch"
					className="navbar__item"
					activeClassName="navbar__item_active"
					href="#"
				>
					Watch
				</NavLink>
				<NavLink
					to="/airpods"
					className="navbar__item"
					activeClassName="navbar__item_active"
					href="#"
				>
					Air Pods
				</NavLink>
			</nav>
			<SortPopup items={['популярности', 'цене', 'алфавиту']} />
		</div>
	);
};

export default Navbar;
