import React from 'react';
import { Route } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductsAirPods from './components/Products/ProductsAirPods/ProductsAirPods';
import ProductsAll from './components/Products/ProductsAll/ProductsAll';
import ProductsIpad from './components/Products/ProductsIpad/ProductsIpad';
import ProductsIphone from './components/Products/ProductsIphone/ProductsIphone';
import ProductsMac from './components/Products/ProductsMac/ProductsMac';
import ProductsWatch from './components/Products/ProductsWatch/ProductsWatch';

const App = props => {
	return (
		<div>
			<Header />
			<div className="container">
				<Navbar />
				<Switch>
					<Route path="/all" component={ProductsAll}></Route>
					<Route path="/iphone" component={ProductsIphone}></Route>
					<Route path="/ipad" component={ProductsIpad}></Route>
					<Route path="/mac" component={ProductsMac}></Route>
					<Route path="/watch" component={ProductsWatch}></Route>
					<Route path="/airpods" component={ProductsAirPods}></Route>
					<Redirect from="/" to="/all" />
				</Switch>
			</div>
		</div>
	);
};

export default App;
