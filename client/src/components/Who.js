import React from 'react';
const videos = [
	{
		title: 'Novel coronavirus (2019-nCoV)',
		src: 'https://www.youtube.com/embed/mOV1aBVYKGA',
	},
	{
		title: "Coronavirus: how do I know if I'm infected and what happens next?",
		src: 'https://www.youtube.com/embed/2JsWf-2nN1Y',
	},
	{
		title: 'How to protect yourself against COVID-19',
		src: 'https://www.youtube.com/embed/1APwq1df6Mw',
	},
	{
		title: 'LIVE TV 🔴',
		src: 'https://youtube.com/embed/l_NIgnb9J2g',
	},
];

const renderVid = () => {
	return videos.map((x) => {
		return (
			<div className='card-2'>
				<h3 className='fx-head'>{x.title}</h3>
				<div>
					<div className='bar-border'>
						>
						<iframe
							title={x.title}
							src={x.src}
							frameborder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen='true'></iframe>
					</div>
				</div>
			</div>
		);
	});
};

const Who = () => {
	return (
		<div className='fx'>
			<div className='fx-container'>{renderVid()}</div>
		</div>
	);
};

export default Who;
