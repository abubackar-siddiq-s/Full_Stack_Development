const express = require("express");
const app = express();

// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Home Page</h1>
        <a href="/about"> About</a><br><br>
        <a href="/contact">Contact</a><br><br>
        <a href="/services">Services</a><br><br>
        <form action="/submit" method="post">
            <input type="text" name="name" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>`);
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1><p>This is the about page.</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us</h1><p>This is the contact page.</p>");
});

app.get("/services", (req, res) => {
  res.send("<h1>Our Services</h1><p>This is the services page.</p>");
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  res.send(
    `<h1>Form Submitted</h1><p>Thank you, ${name}, for submitting the form.</p>`,
  );
});

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000/");
});