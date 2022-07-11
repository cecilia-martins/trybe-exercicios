const http = require("http"); // importe por padrão

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end("Minha aplicação com Nodejs")
}).listen(4001), () => console.log("Servidor rodando na porta 4001");
