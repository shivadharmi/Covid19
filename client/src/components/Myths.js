import React from 'react';
import axios from 'axios';

class Myths extends React.Component {
	state = [];
	componentDidMount() {
		axios.get('/api/myths').then(response => {
			this.setState([...response.data]);
			console.log(response.data);
		});
	}
	render() {
		return (
			<div className='fx'>
				<div class='fx-container'>
					<div className='card-2'>
						<h3 className='fx-head'>
							COVID-19 virus can be transmitted in areas with hot and humid
							climates.
						</h3>
						<a href='https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/52.png'>
							<img
								src='https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/52.png'
								alt=''
							/>
						</a>
					</div>
					<div className='card-2'>
						<h3 className='fx-head'>
							COVID-19 virus can be transmitted in areas with hot and humid
							climates.
						</h3>
						<a href='https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/52.png'>
							<img
								src='https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/52.png'
								alt=''
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Myths;
