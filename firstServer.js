const http = require("http");

const server = http.createServer((req, res) => {
  console.log(" first web server");
});

server.listen(3000, () => {
  console.log(" server is running on port 3000");
});
