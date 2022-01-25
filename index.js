var http = require("http");
// 요청 불러오기
var hostname = "127.0.0.1";
// 본인컴퓨터번호
var port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application.json" });
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
      res.end("생성되었습니다!");
    }
  }

  res.end("Good Bye!");
});
// 서버프로그램에서 요청한 뒤 응답을 기다리는 형태

server.listen(port, hostname);

console.log("gogumar-ket server on!");
