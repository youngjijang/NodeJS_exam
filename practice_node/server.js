const http = require("http");

const server = http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie = test" });
    res.end("Hello Cookie");
  })
  .listen(8080, () => {
    console.log("8080번 포트와 연결되었습니다.");
  });

server.on("error", (err) => {
  console.log(err);
});
