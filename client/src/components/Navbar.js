import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	var uncollapsed = false;
	const collapse = () => {
		if (uncollapsed === false) {
			document.getElementById('nav-links').style.left = '0';
			uncollapsed = !uncollapsed;
		} else {
			document.getElementById('nav-links').style.left = '-100%';
			uncollapsed = !uncollapsed;
		}
	};
	return (
		<nav>
			<input type='checkbox' id='check'></input>
			<label htmlFor='check' className='checkbtn'>
				<i className='fas fa-bars' onClick={collapse}></i>
			</label>
			<Link to='/'>
				<h2 className='nav-brand'>COVID19</h2>
			</Link>
			<ul id='nav-links'>
				<li>
					<Link to='/advices' className='nav-link' onClick={collapse}>
						Advices
					</Link>
				</li>
				<li>
					<Link to='/myths' className='nav-link' onClick={collapse}>
						Myths
					</Link>
				</li>
				<li>
					<Link to='/statistics' className='nav-link' onClick={collapse}>
						Statistics
					</Link>
				</li>
				<li>
					<Link to='/who' className='nav-link' onClick={collapse}>
						who
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
