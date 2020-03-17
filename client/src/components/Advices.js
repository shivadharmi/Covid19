import React from 'react';

const Advices = () => {
	return (
		<div className='advices'>
			<h3>
				Ask WHO <small>Click on images to view in full screen</small>
			</h3>
			<div class='container'>
				<div className='card'>
					<a href='https://www.who.int/images/default-source/health-topics/coronavirus/safe-greetings.png'>
						<img src='https://www.who.int/images/default-source/health-topics/coronavirus/safe-greetings.png' />
					</a>
				</div>
				<div className='card'>
					<a href='https://www.who.int/images/default-source/health-topics/coronavirus/safe-greetings.png'>
						<img src='https://www.who.int/images/default-source/health-topics/coronavirus/safe-greetings.png' />
					</a>
				</div>
				<div className='card'>
					<a href='https://www.who.int/images/default-source/health-topics/coronavirus/wearing-gloves.png'>
						<img src='https://www.who.int/images/default-source/health-topics/coronavirus/wearing-gloves.png' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Advices;
