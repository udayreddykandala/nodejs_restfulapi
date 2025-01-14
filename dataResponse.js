const http = require("http");

const data = [
  {
    id: 1,
    name: " uday",
  },
  {
    id: 2,
    name: " reddy",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "application/json");
  res.setHeader("Content-type", "en-US");
  res.setHeader("Date", new Date(Date.now()));
  res.setHeader("X-Powered-By", " Node.js");

  res.end(
    JSON.stringify({
      success: true,
      results: data.length,
      data: data,
    })
  );
});

server.listen(3000, () => {
  console.log(" server is running on port 3000");
});
