import React from 'react';
import axios from 'axios';

class Myths extends React.Component {
	state = { data: [] };
	componentDidMount() {
		axios.get('https://covid19help.herokuapp.com/api/data/myths').then(response => {
			this.setState({ data: [...response.data] });
		});
	}

	mythsRenderer() {
		return this.state.data.map(x => {
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
		console.log(this.state);
		return (
			<div className='fx'>
				<div class='fx-container'>{this.mythsRenderer()}</div>
			</div>
		);
	}
}

export default Myths;
