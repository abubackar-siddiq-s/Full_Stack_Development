var http = require('http');
var url = require('url');

function app(req, res) {
  if (req.url === "/") {
    res.write("Welcome to the home page");
  } else if (req.url === "/about") {
    res.write("About us");
  } else if (req.url === "/contact") {
    res.write("Contact us");
  } else if (req.url === "/services") {
    res.write("Our services");
  } else if (req.url === "/products") {
    res.write("Our products");
  } else {
    res.write("Page not found");
  }
  res.end();
}

http.createServer(app).listen(3000);
console.log('Server is running on http://localhost:3000');