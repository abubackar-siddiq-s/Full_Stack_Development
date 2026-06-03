const http = require("http");
const eventEmitter = require("events");

const em = new eventEmitter();

function eventHandler() {
  em.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
  });

  em.emit("greet", "Alice");
}

http.createServer(eventHandler).listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
