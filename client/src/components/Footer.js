import React from 'react';
import dsc_logo from './DSC_logo.jpeg';
class Footer extends React.Component {
	render() {
		return (
			<footer>
				<p>
					Made With{' '}
					<span role='img' aria-label='love emoji'>
						❤️
					</span>{' '}
					By{' '}
					<div class='logo'>
						<img src={dsc_logo} alt='DSC logo' />
					</div>
				</p>
				<p>
					Developed By<strong> SIVA SANKAR & VASANTH</strong>
				</p>
			</footer>
		);
	}
}

export default Footer;
