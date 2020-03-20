const advices = {
	who: {
		askWho: [
			'https://www.who.int/images/default-source/health-topics/coronavirus/safe-greetings.png',
			'https://www.who.int/images/default-source/health-topics/coronavirus/wearing-gloves.png',
			'https://www.who.int/images/default-source/health-topics/coronavirus/handshaking.png'
		],
		beReady: [
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-ready-social-3.jpg',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-ready-social-2.jpg',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-ready-social-1.jpg',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-smart-if-you-develop.jpg',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-smart-inform.jpg',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-safe.jpg',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-kind-to-support.jpg',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-kind-to-support.jpg',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-kind-to-address-fear.jpg'
		],
		protectYou: [
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/blue-1.png',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/blue-2.png',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/blue-3.png',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/blue-4.png'
		],
		whileTravel: [
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/1.png',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/2.png',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/3.png',
			'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/4.png'
		]
	}
};

module.exports.advices = advices;

const myths = [
	{
		title:
			'COVID-19 virus can be transmitted in areas with hot and humid climates.',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/52.png'
	},
	{
		title: 'Cold weather and snow CANNOT kill the new coronavirus.',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mb-cold-snow.png'
	},
	{
		title: 'Taking a hot bath does not prevent the new coronavirus disease.',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mb-hot-bath.png'
	},
	{
		title: 'The new coronavirus CANNOT be transmitted through mosquito bites.',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mb-mosquito-bite.png'
	},
	{
		title: 'Are hand dryers effective in killing the new coronavirus?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbusters-27.png'
	},
	{
		title: 'Can an ultraviolet disinfection lamp kill the new coronavirus?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbusters-31.png'
	},
	{
		title:
			'How effective are thermal scanners in detecting people infected with the new coronavirus?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbusters-25.png'
	},
	{
		title:
			'Can spraying alcohol or chlorine all over your body kill the new coronavirus?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbusters-33.png'
	},
	{
		title:
			'Do vaccines against pneumonia protect you against the new coronavirus?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/11.png'
	},
	{
		title:
			'Can regularly rinsing your nose with saline help prevent infection with the new coronavirus?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/23.png'
	},
	{
		title: 'Can eating garlic help prevent infection with the new coronavirus?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/19.png'
	},
	{
		title:
			'Does the new coronavirus affect older people, or are younger people also susceptible?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster-2.png'
	},
	{
		title:
			'Are antibiotics effective in preventing and treating the new coronavirus?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster-3.png'
	},
	{
		title:
			'Are there any specific medicines to prevent or treat the new coronavirus?',
		link:
			'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster-4.png'
	}
];

module.exports.myths = myths;

module.exports.barData = [
	{
		label: 'Andhra Pradesh',
		data: [3, 0, 0, 0]
	},
	{
		label: 'Chhattishgarh',
		data: [1, 0, 0, 0]
	},
	{
		label: 'Delhi',
		data: [16, 1, 5, 1]
	},
	{
		label: 'Gujarat',
		data: [5, 0, 0, 0]
	},
	{
		label: 'Haryana',
		data: [3, 14, 0, 0]
	},
	{
		label: 'Karnataka',
		data: [15, 0, 1, 1]
	},
	{
		label: 'kerala',
		data: [26, 2, 3, 0]
	},
	{
		label: 'Maharastra',
		data: [48, 3, 0, 1]
	},
	,
	{
		label: 'Odisha',
		data: [2, 0, 0, 0]
	},
	{
		label: 'Puducherry',
		data: [1, 0, 0, 0]
	},
	{
		label: 'Punjab',
		data: [2, 0, 0, 1]
	},
	{
		label: 'Rajasthan',
		data: [15, 2, 3, 0]
	},
	{
		label: 'Tamil Nadu',
		data: [3, 0, 1, 0]
	},
	{
		label: 'Telangana',
		data: [8, 9, 1, 0]
	},
	{
		label: 'Union Territory Of Chandigarh',
		data: [1, 0, 0, 0]
	},
	{
		label: 'Union Territory Of Jammu And Kashmir',
		data: [4, 0, 0, 0]
	},
	{
		label: 'Union Territory Of Ladakh',
		data: [10, 0, 0, 0]
	},
	{
		label: 'Uttar Pradesh',
		data: [22, 1, 9, 0]
	},
	{
		label: 'Uttarakhand',
		data: [3, 0, 0, 0]
	},
	{
		label: 'West Bengal',
		data: [2, 0, 0, 0]
	}
];
