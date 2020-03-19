import React from 'react';
import axios from 'axios';

class Myths extends React.Component {
	state = [];
	componentDidMount() {
		axios.get('/api/data/myths').then(response => {
			this.setState([...response.data]);
			console.log(response.data);
		});
	}

	mythsRenderer() {
		return this.state.map(x => {
			return (
				<div className='card-2'>
					<h3 className='fx-head'>{x.title}</h3>
					<a href={x.link}>
						<img src={x.link} alt='' />
					</a>
				</div>
			);
		});
	}
	render() {
		return (
			<div className='fx'>
				<div class='fx-container'>{this.mythsRenderer()}</div>
			</div>
		);
	}
}

export default Myths;
