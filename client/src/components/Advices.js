import React from 'react';
import axios from 'axios';

class Advices extends React.Component {
	state = {};
	componentDidMount() {
		axios.get('/api/data').then(response => {
			console.log(response.data);
			this.setState(...response.data.who);
		});
	}
	render() {
		return (
			<div className='advices'>
				<h3>
					Ask WHO <small>Click on images to view in full screen</small>
				</h3>
				<div class='container'></div>
				<h3>Protect yourself and others from getting sick</h3>
				<div className='container'></div>
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
