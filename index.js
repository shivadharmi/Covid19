const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
	// It will try to serve the file required by use of the below
	// line of the code(express.satatic) and if it doesn't find the file
	// it will send the index.html file for all other requests

	// Express will serve up production asssets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognise the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
	console.log(`server got started on port`);
});
