const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>I'm Alive!!! Hello?</h1>");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});