import React from 'react';
import Cart from './Cart/Cart';
import Logo from './Logo/Logo';

const Header = props => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<Logo />
					<Cart />
				</div>
			</div>
		</header>
	);
};

export default Header;
