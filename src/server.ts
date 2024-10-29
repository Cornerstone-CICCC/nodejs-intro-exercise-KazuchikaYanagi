import http from "http";
// const http = require("http");

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    // Home
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Home</h1>");
      res.end();
      return;
    }

    // About
    if (req.url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>About</h1>");
      res.end();
      return;
    }

    // My account
    if (req.url === "/my-account") {
      res.writeHead(403, { "content-type": "text/plain" });
      res.write("You have no access to this page");
      res.end();
      return;
    }

    // Not found
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("Page not found");

    res.end();
  }
);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening server on port ${PORT}`);
});
