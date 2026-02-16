var http = require("http");
var url = require("url");
var querystring = require("querystring");

const post = (req, res) => {
  var path = url.parse(req.url).pathname;
  var query = url.parse(req.url).query;
  var qs = querystring.parse(query);
  var id = qs["id"];
  var name = qs["name"];
  var email = qs["email"];
  var mobile = qs["mobile"];
  var department = qs["dept"];
  var gender = qs["gender"];
  var doj = qs["date"];
  res.write("ID: " + id + "\n\n");
  res.write("Name: " + name + "\n\n");
  res.write("Email: " + email + "\n\n");
  res.write("Mobile: " + mobile + "\n\n");
  res.write("Department: " + department + "\n\n");
  res.write("Gender: " + gender + "\n\n");
  res.write("Date of Join: " + doj + "\n\n");
  res.end();
};

http.createServer(post).listen(8000, () => {
  console.log("Server running at http://localhost:8000/");
});
