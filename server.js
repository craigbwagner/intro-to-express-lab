const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

app.get('/greetings/:username', (req, res) => {
	const username = req.params.username;
	res.send(`Hello there, ${username}`);
});
