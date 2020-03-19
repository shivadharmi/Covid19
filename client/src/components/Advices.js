import React from 'react';
import axios from 'axios';

class Advices extends React.Component {
	state = { who: { askWho: [], beReady: [], protectYou: [], whileTravel: [] } };
	componentDidMount() {
		axios.get('/api/data').then(response => {
			console.log(response.data);
			this.setState({ ...response.data });
		});
	}
	askWho() {
		return this.state.who.askWho.map(x => {
			return (
				<div className='card'>
					<a href={x}>
						<img src={x} alt='' />
					</a>
				</div>
			);
		});
	}

	beReady() {
		return this.state.who.beReady.map(x => {
			return (
				<div className='card'>
					<a href={x}>
						<img src={x} alt='' />
					</a>
				</div>
			);
		});
	}
	protectYou() {
		return this.state.who.protectYou.map(x => {
			return (
				<div className='card'>
					<a href={x}>
						<img src={x} alt='' />
					</a>
				</div>
			);
		});
	}

	whileTravel() {
		return this.state.who.whileTravel.map(x => {
			return (
				<div className='card-3'>
					<a href={x}>
						<img src={x} alt='' />
					</a>
				</div>
			);
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className='fx'>
				<h3 className='fx-head'>
					Ask WHO <small>Click on images to view in full screen</small>
				</h3>
				<div class='fx-container'>{this.askWho()}</div>

				<h3 className='fx-head'>Be Ready for coronavirus</h3>
				<div className='fx-container'>{this.beReady()}</div>

				<h3 className='fx-head'>
					Protect yourself and others from getting sick
				</h3>
				<div className='fx-container'>{this.protectYou()}</div>

				<h3 className='fx-head'>
					How to cope with stress during 2019-nCoV outbreak
				</h3>
				<div className='fx-container'>
					<a
						className='advice-link'
						href='https://www.who.int/docs/default-source/coronaviruse/coping-with-stress.pdf?sfvrsn=9845bc3a_2'>
						&#8594; Coping with stress during the 2019-nCoV outbreak
					</a>
					<a
						className='advice-link'
						href='https://www.who.int/docs/default-source/coronaviruse/helping-children-cope-with-stress-print.pdf?sfvrsn=f3a063ff_2'>
						&#8594; Helping children cope with stress during the 2019-nCoV
						outbreak
					</a>
				</div>
				<h3 className='fx-head'>Stay healthy while travelling</h3>
				<div className='fx-container'>{this.whileTravel()}</div>
			</div>
		);
	}
}

export default Advices;

{
	/* 
	<div className="container">
		<h3></h3>
		<div className="card">
			<a href="">
				<img src="" alt=""/>
			</a>
		</div> 	
	</div>*/
}
