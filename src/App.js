import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import AirPodsСatalog from './Pages/AirPodsСatalog';
import AllCatalog from './Pages/AllСatalog';
import IpadСatalog from './Pages/IpadСatalog';
import IphoneСatalog from './Pages/IphoneСatalog';
import MacСatalog from './Pages/MacСatalog';
import WatchСatalog from './Pages/WatchСatalog';

const App = props => {
	return (
		<div>
			<Header />
			<div className="container">
				<Navbar />
				<Switch>
					<Route path="/all" render={() => <AllCatalog />} />
					<Route path="/iphone" render={() => <IphoneСatalog />} />
					<Route path="/ipad" render={() => <IpadСatalog />} />
					<Route path="/mac" render={() => <MacСatalog />} />
					<Route path="/watch" render={() => <WatchСatalog />} />
					<Route path="/airpods" render={() => <AirPodsСatalog />} />
					<Redirect from="/" to="/all" />
				</Switch>
			</div>
		</div>
	);
};

export default App;
