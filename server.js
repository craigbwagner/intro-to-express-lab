const express = require('express');
const app = express();
const validator = require('validator');
const port = 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

app.get('/greetings/:username', (req, res) => {
	const username = req.params.username;
	res.send(`Hello there, ${username}`);
});

app.get('/roll/:diceSize', (req, res) => {
	const dice = req.params.diceSize;

	if (validator.isNumeric(dice)) {
		diceNumber = Number(dice);
		const roll = Math.floor(Math.random() * dice);
		res.send(`You rolled a ${roll}`);
	} else if (!validator.isNumeric(dice)) {
		res.send('You must specify a number.');
	}
});
