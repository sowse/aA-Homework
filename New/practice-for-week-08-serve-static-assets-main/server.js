const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  if(req.method === 'GET' && req.url.startsWith('/static')) {
    const splitURL = req.url.split('/');
    const filename = splitURL[splitURL.length-1];
    const filepath = splitURL.slice(2).join('/');
    const fileextension = filename.split('.')[1];
    res.statusCode = 200;
    
    if(fileextension === 'css') {
      res.setHeader('Content-Type', 'text/css')
    } else if(fileextension === 'jpg') {
      res.setHeader('Content-Type', 'image/jpeg')
    }
    const fileContents = fs.readFileSync(`./assets/${filepath}`);
    res.end(fileContents);
  } else {
  const fileContents = fs.readFileSync('./index.html');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')
  res.end(fileContents);
  }
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
