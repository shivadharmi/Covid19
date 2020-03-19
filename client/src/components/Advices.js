import React from 'react';
import axios from 'axios';
import data from './data';
if (process.env.NODE_ENV === 'production') {
	data = this.state;
}
class Advices extends React.Component {
	state = {};
	componentDidMount() {
		axios.get('/api/data').then(response => {
			console.log(response.data);
			this.setState(...response.data.data);
		});
	}
	askWho() {
		return data.who.askWho.map(x => {
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
		return data.who.beReady.map(x => {
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
		return data.who.protectYou.map(x => {
			return (
				<div className='card'>
					<a href={x}>
						<img src={x} alt='' />
					</a>
				</div>
			);
		});
	}
	render() {
		return (
			<div className='advices'>
				<h3>
					Ask WHO <small>Click on images to view in full screen</small>
				</h3>
				<div class='container'>{this.askWho()}</div>

				<h3>Be Ready for coronavirus</h3>
				<div className='container'>{this.beReady()}</div>

				<h3>Protect yourself and others from getting sick</h3>
				<div className='container'>{this.protectYou()}</div>

				<h3>How to cope with stress during 2019-nCoV outbreak</h3>
				<div className='container'>
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
