import React from 'react';
import logo from '../../../assets/img/logo.png';

const Logo = props => {
	return (
		<div className="logo">
			<img className="logo__img" src={logo} alt="logo" />
			<div className="logo__text">техника apple</div>
		</div>
	);
};

export default Logo;
