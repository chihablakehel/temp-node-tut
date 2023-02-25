const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our page");
  }
  if (req.url === "/about") {
    res.end("this is our short history");
  }
  res.end(`
  <h1>Oooop!</h1>
  <p>we cant find what you are looking for</p>
  <a href='/'>Back Home </a>
  `);
});
server.listen(5000);
