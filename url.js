// Create a Program to parse the different parts of a URL using the URL module in Node.js

const url = require('url');
const http = require('http');

function f1(request, response) {
    var protocol = url.parse(request.url).protocol;
    var hostname = url.parse(request.url).hostname;
    var path = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    response.write(`Protocol: ${protocol}\nHostname: ${hostname}\nPath: ${path}\nQuery: ${query}`);
    response.end();
}

http.createServer(f1).listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});