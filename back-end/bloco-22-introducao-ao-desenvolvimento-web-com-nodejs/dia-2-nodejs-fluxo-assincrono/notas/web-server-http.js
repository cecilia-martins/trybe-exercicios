//MODULO DE WEB SERVER - HTTP
const http = require('http');

const hostname = '127.0.0.1';
const porta = 8080;

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === '/') {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html; charset=utf8');
  res.end('Eaeeeê');    
  }
  if (url === '/sobre') {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html; charset=utf8');
  res.end('SOBREEE');    
  }

});

server.listen(porta, hostname, () => console.log('funfei aaaaaaa http://localhost:8080'));

 
