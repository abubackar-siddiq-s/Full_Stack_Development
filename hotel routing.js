const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Hotel Booking</h1>
        <a href="/breakfast"> Breakfast</a><br><br>
        <a href="/lunch">Lunch</a><br><br>
        <a href="/dinner">Dinner</a><br><br>`);
});

app.get('/breakfast', (req, res) => {
    res.send(`<h1>Breakfast Menu</h1>
        <ul>
            <li>Dosai</li>
            <li>Idli</li>
            <li>Pongal</li>
            <li>Vada</li>
            <li>Poori</li>
        </ul>
        <a href="/">Back to Home</a>`);
});

app.get('/lunch', (req, res) => {
    res.send(`<h1>Lunch Menu</h1>
        <ul>
            <li>Briyani</li>
            <li>Sambar</li>
            <li>Chicken Kurma</li>
        </ul>
        <a href="/">Back to Home</a>`);
});

app.get('/dinner', (req, res) => {
    res.send(`<h1>Dinner Menu</h1>
        <ul>
            <li>Dosai</li>
            <li>Chappathi</li>
            <li>Idli</li>
            <li>Poratta</li>
        </ul>
        <a href="/">Back to Home</a>`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});