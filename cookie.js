const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('username', 'Abubackar');
    res.send(`<h1>Cookie has been set</h1>
        <a href="/view">View Cookie</a><br><br>
        <a href="/clear">Clear Cookie</a>`);
});

app.get('/view', (req, res) => {
    res.send(`<h1>Cookie Value: ${req.cookies.username}</h1>`);
});

app.get('/clear', (req, res) => {
    res.clearCookie('username');
    res.send('<h1>Cookie has been cleared</h1>');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});