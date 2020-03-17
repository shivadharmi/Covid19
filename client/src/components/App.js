import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './grid.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Advices from './Advices';
import Mask from './Mask';
import Myths from './Myths';
import Who from './Who';

function App() {
	return (
		<Router>
			<div className='container-main'>
				<Navbar />
				<Route exact path='/'>
					<Main />
				</Route>
				<Route exact path='/advices'>
					<Advices />
				</Route>
				<Route exact path='/myths'>
					<Myths />
				</Route>
				<Route exact path='/mask'>
					<Mask />
				</Route>
				<Route exact path='/who'>
					<Who />
				</Route>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
