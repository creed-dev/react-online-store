import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

const App = props => {
	return (
		<div>
			<Header />
			<div className="container">
				<Navbar />
				<Products />
			</div>
		</div>
	);
};

export default App;
