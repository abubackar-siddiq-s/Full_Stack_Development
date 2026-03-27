const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
}));

app.get('/', (req, res) => {
    req.session.name = 'Abubackar';
    res.send(`<h1>Session has been set</h1>
        <a href="/view">View Session</a><br><br>
        <a href="/clear">Clear Session</a>`);
});

app.get('/view', (req, res) => {
    res.send(`Session Value: ${req.session.name}`);
});

app.get('/clear', (req, res) => {
    req.session.destroy((err) => {
        res.send('Session has been cleared');
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});