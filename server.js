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

app.get('/collectibles/:index', (req, res) => {
	const collectibles = [
		{ name: 'shiny ball', price: 5.95 },
		{ name: 'autographed picture of a dog', price: 10 },
		{ name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 },
	];
	const index = req.params.index;
	res.send(
		`If you want to buy the ${collectibles[index].name}, it will cost you $${collectibles[index].price}`
	);
});

app.get('/shoes', (req, res) => {
	const shoes = [
		{ name: 'Birkenstocks', price: 50, type: 'sandal' },
		{ name: 'Air Jordans', price: 500, type: 'sneaker' },
		{ name: 'Air Mahomeses', price: 501, type: 'sneaker' },
		{ name: 'Utility Boots', price: 20, type: 'boot' },
		{ name: 'Velcro Sandals', price: 15, type: 'sandal' },
		{ name: 'Jet Boots', price: 1000, type: 'boot' },
		{ name: 'Fifty-Inch Heels', price: 175, type: 'heel' },
	];
	let filteredShoesArray = [...shoes];
	const minPrice = req.query.minPrice;
	const maxPrice = req.query.maxPrice;
	const style = req.query.style;

	if (minPrice !== undefined) {
		filteredShoesArray = filteredShoesArray.filter((shoe) => {
			return shoe.price >= minPrice;
		});
	}
	if (maxPrice !== undefined) {
		filteredShoesArray = filteredShoesArray.filter((shoe) => {
			return shoe.price <= maxPrice;
		});
	}
	if (style !== undefined) {
		filteredShoesArray = filteredShoesArray.filter((shoe) => {
			return shoe.type === style;
		});
	}

	console.log(filteredShoesArray);

	res.send(filteredShoesArray);
});
