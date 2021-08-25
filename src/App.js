import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import CatalogAirPods from './Pages/CatalogAirPods';
import CatalogIpad from './Pages/CatalogIpad';
import CatalogIphone from './Pages/CatalogIphone';
import CatalogMac from './Pages/CatalogMac';
import CatalogWatch from './Pages/CatalogWatch';

const App = props => {
	const [state, setState] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			setState(data.iphoneCatalog);
		});
	}, []);

	return (
		<div>
			<Header />
			<div className="container">
				<Navbar />
				<Switch>
					<Route
						path="/iphone"
						render={() => <CatalogIphone iphones={state} />}
					></Route>
					<Route path="/ipad" component={CatalogIpad}></Route>
					<Route path="/mac" component={CatalogMac}></Route>
					<Route path="/watch" component={CatalogWatch}></Route>
					<Route path="/airpods" component={CatalogAirPods}></Route>
				</Switch>
			</div>
		</div>
	);
};

export default App;
