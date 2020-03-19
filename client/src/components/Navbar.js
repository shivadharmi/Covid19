import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<input type='checkbox' id='check'></input>
			<label htmlFor='check' className='checkbtn'>
				<i className='fas fa-bars'></i>
			</label>
			<Link to='/'>
				<h2 className='nav-brand'>COVID19</h2>
			</Link>
			<ul>
				<li>
					<Link to='/advices' className='nav-link'>
						Advices
					</Link>
				</li>
				<li>
					<Link to='/myths' className='nav-link'>
						Myths
					</Link>
				</li>
				<li>
					<Link to='/statistics' className='nav-link'>
						Statistics
					</Link>
				</li>
				<li>
					<Link to='/who' className='nav-link'>
						who
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
